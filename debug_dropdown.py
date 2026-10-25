import asyncio
import json
import base64
import subprocess
import time
import urllib.request
import websockets

CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

async def run():
    proc = subprocess.Popen([
        CHROME_PATH,
        "--headless=new",
        "--disable-gpu",
        "--remote-debugging-port=9227",
        "--window-size=1440,900",
        "about:blank"
    ])
    time.sleep(1.5)

    try:
        req = urllib.request.urlopen("http://127.0.0.1:9227/json")
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
                    if res.get("id") == msg_id:
                        return res.get("result", {})

            await send_cmd("Page.enable")
            await send_cmd("Runtime.enable")
            await send_cmd("Emulation.setDeviceMetricsOverride", {
                "width": 1440,
                "height": 900,
                "deviceScaleFactor": 1,
                "mobile": False
            })

            print("Navigating to http://localhost:8000/?view=dashboard...")
            await send_cmd("Page.navigate", {"url": "http://localhost:8000/?view=dashboard"})
            await asyncio.sleep(2.0)

            # Click language selector in sidebar
            click_res = await send_cmd("Runtime.evaluate", {
                "expression": """
                (() => {
                    const btn = document.querySelector('aside button[aria-label="Select application language"]');
                    if (btn) {
                        btn.click();
                        return "clicked sidebar lang selector";
                    }
                    return "not found";
                })()
                """
            })
            print("Click result:", click_res)
            await asyncio.sleep(0.5)

            # Measure dropdown box
            box_res = await send_cmd("Runtime.evaluate", {
                "expression": """
                (() => {
                    const menu = document.querySelector('aside [aria-haspopup="true"] + div');
                    if (!menu) return { error: "no menu found" };
                    const rect = menu.getBoundingClientRect();
                    return {
                        x: rect.x,
                        y: rect.y,
                        width: rect.width,
                        height: rect.height,
                        right: rect.right,
                        bottom: rect.bottom,
                        windowWidth: window.innerWidth,
                        windowHeight: window.innerHeight
                    };
                })()
                """,
                "returnByValue": True
            })
            print("Dropdown bounding rect:", box_res)

            res = await send_cmd("Page.captureScreenshot", {"format": "png"})
            with open("screenshot_debug_dropdown.png", "wb") as f:
                f.write(base64.b64decode(res["data"]))
            print("Saved screenshot_debug_dropdown.png")

    finally:
        proc.terminate()

if __name__ == "__main__":
    asyncio.run(run())
