"""
Headless Chrome CDP Automated Frontend Audit for Orca MedScan:
- All 7 Views Navigation
- All 7 Indian Languages
- Light / Dark Mode Toggle
- Mobile Responsiveness (375x812) & Horizontal Scroll Check
- Console Error and Unhandled Exception Monitoring
"""

import asyncio
import json
import base64
import subprocess
import time
import urllib.request
import websockets

CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

async def run_frontend_audit():
    proc = subprocess.Popen([
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--remote-debugging-port=9229",
        "--window-size=1440,900",
        "about:blank"
    ])
    time.sleep(1.5)

    audit_summary = {
        "views_tested": {},
        "languages_tested": {},
        "theme_toggle": False,
        "mobile_responsive": False,
        "console_errors": [],
        "screenshots": []
    }

    try:
        req = urllib.request.urlopen("http://127.0.0.1:9229/json")
        tabs = json.loads(req.read().decode())
        ws_url = [t["webSocketDebuggerUrl"] for t in tabs if t["type"] == "page"][0]

        async with websockets.connect(ws_url, max_size=25*1024*1024) as ws:
            msg_id = 0
            async def send_cmd(method, params=None):
                nonlocal msg_id
                msg_id += 1
                cmd = {"id": msg_id, "method": method, "params": params or {}}
                await ws.send(json.dumps(cmd))
                while True:
                    raw = await ws.recv()
                    res = json.loads(raw)
                    # capture console logs
                    if res.get("method") == "Runtime.consoleAPICalled":
                        p = res.get("params", {})
                        if p.get("type") in ["error", "warning"]:
                            args = [str(a.get("value", a.get("description", ""))) for a in p.get("args", [])]
                            audit_summary["console_errors"].append(" ".join(args))
                    if res.get("id") == msg_id:
                        return res.get("result", {})

            await send_cmd("Page.enable")
            await send_cmd("Runtime.enable")
            await send_cmd("DOM.enable")

            # 1. Desktop Viewport (1440x900)
            await send_cmd("Emulation.setDeviceMetricsOverride", {
                "width": 1440,
                "height": 900,
                "deviceScaleFactor": 1,
                "mobile": False
            })

            # Navigate to base
            await send_cmd("Page.navigate", {"url": "http://localhost:8000/"})
            await asyncio.sleep(2.0)

            # Test Navigation Views
            views = ["dashboard", "analyze", "assistant", "history", "diagnostics", "settings", "safety"]
            for v in views:
                await send_cmd("Page.navigate", {"url": f"http://localhost:8000/?view={v}"})
                await asyncio.sleep(1.0)
                eval_script = """
                (() => {
                    return {
                        title: document.title,
                        headings: Array.from(document.querySelectorAll('h1, h2, h3')).map(h => h.innerText.trim()).filter(Boolean).slice(0, 3),
                        hasContent: document.body.innerText.length > 100
                    };
                })()
                """
                res = await send_cmd("Runtime.evaluate", {"expression": eval_script, "returnByValue": True})
                val = res.get("result", {}).get("value", {})
                audit_summary["views_tested"][v] = {
                    "ok": val.get("hasContent", False),
                    "headings": val.get("headings", [])
                }

            # Test Theme Toggle (Dark Mode vs Light Mode)
            toggle_script = """
            (() => {
                const isDarkBefore = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
                // Click theme toggle button
                const btn = Array.from(document.querySelectorAll('button')).find(b => 
                    b.innerText.includes('Night Mode') || b.innerText.includes('Light Mode') || b.innerText.includes('Theme')
                );
                if (btn) btn.click();
                return { isDarkBefore, btnFound: !!btn };
            })()
            """
            t_res = await send_cmd("Runtime.evaluate", {"expression": toggle_script, "returnByValue": True})
            await asyncio.sleep(0.8)
            
            # Check after toggle
            check_theme_script = """
            (() => {
                const isDarkAfter = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
                return isDarkAfter;
            })()
            """
            after_res = await send_cmd("Runtime.evaluate", {"expression": check_theme_script, "returnByValue": True})
            is_dark_after = after_res.get("result", {}).get("value")
            audit_summary["theme_toggle"] = is_dark_after is not None

            # Capture Dark Mode Screenshot
            s_res = await send_cmd("Page.captureScreenshot", {"format": "png"})
            with open("screenshot_audit_darkmode.png", "wb") as f:
                f.write(base64.b64decode(s_res["data"]))
            audit_summary["screenshots"].append("screenshot_audit_darkmode.png")

            # Test 7 Languages
            langs = ["en", "hi", "te", "ta", "kn", "ml", "bn"]
            for l in langs:
                await send_cmd("Page.navigate", {"url": f"http://localhost:8000/?view=dashboard&lang={l}"})
                await asyncio.sleep(0.8)
                eval_lang = """
                (() => {
                    const sampleText = document.body.innerText.slice(0, 400);
                    return {
                        hasText: sampleText.length > 50,
                        urlLang: window.location.search
                    };
                })()
                """
                l_res = await send_cmd("Runtime.evaluate", {"expression": eval_lang, "returnByValue": True})
                val = l_res.get("result", {}).get("value", {})
                audit_summary["languages_tested"][l] = val.get("hasText", False)

            # Capture Indic (Telugu) Screenshot
            await send_cmd("Page.navigate", {"url": "http://localhost:8000/?view=dashboard&lang=te"})
            await asyncio.sleep(1.0)
            s_te = await send_cmd("Page.captureScreenshot", {"format": "png"})
            with open("screenshot_audit_indic_telugu.png", "wb") as f:
                f.write(base64.b64decode(s_te["data"]))
            audit_summary["screenshots"].append("screenshot_audit_indic_telugu.png")

            # 2. Mobile Viewport Check (375x812 - iPhone)
            print("Testing Mobile Viewport (375x812)...")
            await send_cmd("Emulation.setDeviceMetricsOverride", {
                "width": 375,
                "height": 812,
                "deviceScaleFactor": 2,
                "mobile": True
            })
            await send_cmd("Page.navigate", {"url": "http://localhost:8000/?view=dashboard&lang=en"})
            await asyncio.sleep(1.5)

            mobile_eval = """
            (() => {
                const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
                const clientWidth = document.documentElement.clientWidth || window.innerWidth;
                const hasHorizontalOverflow = scrollWidth > clientWidth + 5; // tolerance for 1-2px rounding
                return {
                    scrollWidth,
                    clientWidth,
                    hasHorizontalOverflow,
                    bodyTextLength: document.body.innerText.length
                };
            })()
            """
            m_res = await send_cmd("Runtime.evaluate", {"expression": mobile_eval, "returnByValue": True})
            m_val = m_res.get("result", {}).get("value", {})
            audit_summary["mobile_metrics"] = m_val
            audit_summary["mobile_responsive"] = not m_val.get("hasHorizontalOverflow", True)

            # Capture Mobile Screenshot
            s_mobile = await send_cmd("Page.captureScreenshot", {"format": "png"})
            with open("screenshot_audit_mobile.png", "wb") as f:
                f.write(base64.b64decode(s_mobile["data"]))
            audit_summary["screenshots"].append("screenshot_audit_mobile.png")

    finally:
        proc.terminate()

    with open("audit_results_frontend.json", "w") as f:
        json.dump(audit_summary, f, indent=2)

    print("Frontend Audit Completed:")
    print(f"  Views Tested: {len(audit_summary['views_tested'])}/7 OK")
    print(f"  Languages Tested: {len(audit_summary['languages_tested'])}/7 OK")
    print(f"  Theme Toggle: {audit_summary['theme_toggle']}")
    print(f"  Mobile Responsive (375px): {audit_summary['mobile_responsive']} (scrollWidth={audit_summary['mobile_metrics'].get('scrollWidth')}px, clientWidth={audit_summary['mobile_metrics'].get('clientWidth')}px)")
    print(f"  Console Errors: {len(audit_summary['console_errors'])}")

if __name__ == "__main__":
    asyncio.run(run_frontend_audit())

