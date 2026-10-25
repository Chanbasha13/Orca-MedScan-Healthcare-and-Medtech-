import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Props {
  statusText?: string;
  onInspect?: () => void;
  className?: string;
}

export const ThreeDocumentStack: React.FC<Props> = ({
  statusText = 'SPECIMEN MET-98421 • VERIFIED ASSAYS',
  onInspect,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isInspecting, setIsInspecting] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWebglSupported(false);
      return;
    }

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 420;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Sophisticated Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfffbf5, 1.8);
    scene.add(ambientLight);

    const topWarmLight = new THREE.DirectionalLight(0xfff5ea, 2.4);
    topWarmLight.position.set(5, 9, 7);
    topWarmLight.castShadow = true;
    topWarmLight.shadow.mapSize.width = 1024;
    topWarmLight.shadow.mapSize.height = 1024;
    topWarmLight.shadow.bias = -0.0005;
    scene.add(topWarmLight);

    const forestRimLight = new THREE.DirectionalLight(0x2d6a4f, 1.8);
    forestRimLight.position.set(-7, -3, 5);
    scene.add(forestRimLight);

    // 3. Document Canvas Texture (Authentic Hospital Laboratory Pathology Form)
    const docCanvas = document.createElement('canvas');
    docCanvas.width = 1024;
    docCanvas.height = 1440;
    const ctx = docCanvas.getContext('2d');
    if (ctx) {
      // Warm ivory clinical parchment background
      ctx.fillStyle = '#FCFAF7';
      ctx.fillRect(0, 0, 1024, 1440);

      // Top Hospital Letterhead (Deep Forest Green)
      ctx.fillStyle = '#163E2D';
      ctx.fillRect(50, 50, 924, 95);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 32px Newsreader, Georgia, serif';
      ctx.fillText('METROPOLIS PATHOLOGY & MOLECULAR DIAGNOSTICS', 80, 108);

      ctx.font = '500 18px JetBrains Mono, monospace';
      ctx.fillText('REQUISITION ID: MET-98421  //  ACCREDITED ISO-15189', 80, 134);

      // Specimen & Patient Metadata Card
      ctx.fillStyle = '#F5F2EB';
      ctx.fillRect(50, 165, 924, 90);

      ctx.fillStyle = '#161B20';
      ctx.font = 'bold 22px Plus Jakarta Sans, sans-serif';
      ctx.fillText('PATIENT: John Doe (46 Y / M)', 80, 205);
      ctx.font = '500 18px Plus Jakarta Sans, sans-serif';
      ctx.fillStyle = '#485663';
      ctx.fillText('PANEL: Fasting Metabolic & Comprehensive Hematology', 80, 235);

      ctx.fillStyle = '#1B4533';
      ctx.font = 'bold 16px JetBrains Mono, monospace';
      ctx.fillText('SPECIMEN COLLECTED: 2026-10-25 08:30 IST', 540, 220);

      // Divider Line
      ctx.strokeStyle = '#DDD5C7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(50, 275);
      ctx.lineTo(974, 275);
      ctx.stroke();

      // Clinical Assays Matrix
      const testRows = [
        ['Hemoglobin (Hb)', '10.8 g/dL', '13.0 - 17.5', 'POTENTIALLY LOW'],
        ['White Blood Cell Count', '6,500 /mcL', '4000 - 11000', 'NORMAL'],
        ['Platelet Count', '240,000 /mcL', '150000 - 450000', 'NORMAL'],
        ['Fasting Blood Glucose', '132.0 mg/dL', '70.0 - 99.0', 'POTENTIALLY HIGH'],
        ['Total Cholesterol', '224.0 mg/dL', '125.0 - 200.0', 'POTENTIALLY HIGH'],
        ['Serum Creatinine', '0.90 mg/dL', '0.60 - 1.30', 'NORMAL'],
        ['Blood Urea Nitrogen', '28.0 mg/dL', '7.0 - 20.0', 'POTENTIALLY HIGH'],
        ['Thyroid Stimulating Hormone', '2.10 uIU/mL', '0.40 - 4.50', 'NORMAL'],
      ];

      testRows.forEach((row, i) => {
        const y = 330 + i * 85;
        // Subtle row shading
        ctx.fillStyle = i % 2 === 0 ? '#FAF8F5' : '#FCFAF7';
        ctx.fillRect(50, y - 35, 924, 76);

        ctx.fillStyle = '#161B20';
        ctx.font = '600 22px Plus Jakarta Sans, sans-serif';
        ctx.fillText(row[0], 80, y + 8);

        ctx.font = 'bold 24px JetBrains Mono, monospace';
        ctx.fillStyle = '#161B20';
        ctx.fillText(row[1], 460, y + 8);

        ctx.fillStyle = '#647482';
        ctx.font = '500 18px JetBrains Mono, monospace';
        ctx.fillText('Ref: ' + row[2], 640, y + 8);

        if (row[3].includes('HIGH')) {
          ctx.fillStyle = '#9C2527';
          ctx.font = 'bold 16px Plus Jakarta Sans, sans-serif';
          ctx.fillText('▲ ' + row[3], 820, y + 8);
        } else if (row[3].includes('LOW')) {
          ctx.fillStyle = '#916117';
          ctx.font = 'bold 16px Plus Jakarta Sans, sans-serif';
          ctx.fillText('▼ ' + row[3], 820, y + 8);
        } else {
          ctx.fillStyle = '#1E6B4B';
          ctx.font = 'bold 16px Plus Jakarta Sans, sans-serif';
          ctx.fillText('✓ ' + row[3], 820, y + 8);
        }
      });

      // Bottom Certification Bar
      ctx.fillStyle = '#F5F2EB';
      ctx.fillRect(50, 1340, 924, 50);

      ctx.fillStyle = '#163E2D';
      ctx.font = 'bold 15px JetBrains Mono, monospace';
      ctx.fillText('ORCA CLINICAL ENCLAVE // DETERMINISTIC PARSER // 100% LOCAL RAM SOVEREIGNTY', 80, 1372);
    }

    const docTexture = new THREE.CanvasTexture(docCanvas);
    docTexture.minFilter = THREE.LinearFilter;

    // 4. Layered Physical Specimen Geometry
    const stackGroup = new THREE.Group();
    scene.add(stackGroup);

    const docWidth = 4.3;
    const docHeight = 6.0;
    const docDepth = 0.05;

    const paperGeometry = new THREE.BoxGeometry(docWidth, docHeight, docDepth);

    // Layer 3 (Bottom Specimen Folder)
    const layer3Mat = new THREE.MeshStandardMaterial({
      color: 0xddd5c7,
      roughness: 0.9,
    });
    const layer3Mesh = new THREE.Mesh(paperGeometry, layer3Mat);
    layer3Mesh.position.set(-0.2, -0.22, -0.16);
    layer3Mesh.rotation.z = -0.06;
    layer3Mesh.castShadow = true;
    layer3Mesh.receiveShadow = true;
    stackGroup.add(layer3Mesh);

    // Layer 2 (Middle Calibrated Worksheet)
    const layer2Mat = new THREE.MeshStandardMaterial({
      color: 0xede7df,
      roughness: 0.85,
    });
    const layer2Mesh = new THREE.Mesh(paperGeometry, layer2Mat);
    layer2Mesh.position.set(-0.1, -0.11, -0.08);
    layer2Mesh.rotation.z = -0.03;
    layer2Mesh.castShadow = true;
    layer2Mesh.receiveShadow = true;
    stackGroup.add(layer2Mesh);

    // Top Layer (Main Pathology Report)
    const topMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xf5f2eb, roughness: 0.8 }), // right
      new THREE.MeshStandardMaterial({ color: 0xf5f2eb, roughness: 0.8 }), // left
      new THREE.MeshStandardMaterial({ color: 0xf5f2eb, roughness: 0.8 }), // top
      new THREE.MeshStandardMaterial({ color: 0xf5f2eb, roughness: 0.8 }), // bottom
      new THREE.MeshStandardMaterial({ map: docTexture, roughness: 0.6, metalness: 0.04 }), // front
      new THREE.MeshStandardMaterial({ color: 0xf5f2eb, roughness: 0.85 }), // back
    ];
    const topMesh = new THREE.Mesh(paperGeometry, topMaterials);
    topMesh.castShadow = true;
    topMesh.receiveShadow = true;
    stackGroup.add(topMesh);

    // Scanning Light Bar (Deep emerald/forest diagnostic beam)
    const scanGeo = new THREE.PlaneGeometry(docWidth * 1.04, 0.09);
    const scanMat = new THREE.MeshBasicMaterial({
      color: 0x388e69,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    const scanMesh = new THREE.Mesh(scanGeo, scanMat);
    scanMesh.position.set(0, 0, 0.04);
    stackGroup.add(scanMesh);

    // Initial subtle editorial angle
    stackGroup.rotation.x = 0.14;
    stackGroup.rotation.y = -0.18;

    // 5. Pointer Parallax Physics
    let targetRotX = 0.14;
    let targetRotY = -0.18;
    let curRotX = 0.14;
    let curRotY = -0.18;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetRotY = -0.18 + x * 0.4;
      targetRotX = 0.14 - y * 0.4;
    };

    const handleMouseLeave = () => {
      targetRotX = 0.14;
      targetRotY = -0.18;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 6. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Exponential damping
      curRotX += (targetRotX - curRotX) * 0.06;
      curRotY += (targetRotY - curRotY) * 0.06;

      stackGroup.rotation.x = curRotX;
      stackGroup.rotation.y = curRotY;

      // Laser scan sweep
      const sweepPeriod = 2.8;
      const progress = (elapsedTime % sweepPeriod) / sweepPeriod;
      scanMesh.position.y = 2.7 - progress * 5.4;
      scanMesh.material.opacity = 0.25 + Math.sin(progress * Math.PI) * 0.65;

      // Gentle organic float
      stackGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.07;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      docTexture.dispose();
    };
  }, [webglSupported]);

  // Static Fallback for reduced motion or missing WebGL
  if (!webglSupported) {
    return (
      <div className={`relative flex items-center justify-center p-6 ${className}`}>
        <div className="w-80 rounded-xl bg-ivory-50 dark:bg-charcoal-900 border border-ivory-200 dark:border-charcoal-800 shadow-paper-elevated p-5">
          <div className="flex items-center justify-between pb-3 border-b border-ivory-200 dark:border-charcoal-800">
            <span className="font-serif font-bold text-xs text-forest-800 dark:text-forest-400">
              METROPOLIS PATHOLOGY
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-forest-50 dark:bg-forest-950 text-forest-800 dark:text-forest-300 border border-forest-200">
              MET-98421
            </span>
          </div>
          <div className="py-3 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-charcoal-600 dark:text-charcoal-400">Hemoglobin (Hb)</span>
              <span className="font-mono font-bold text-clinical-low">10.8 g/dL (Low)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-600 dark:text-charcoal-400">Fasting Glucose</span>
              <span className="font-mono font-bold text-clinical-high">132.0 mg/dL (High)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-600 dark:text-charcoal-400">Platelet Count</span>
              <span className="font-mono font-bold text-clinical-norm">240,000 /mcL (Normal)</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-charcoal-400 uppercase tracking-wider text-center pt-2 border-t border-ivory-200 dark:border-charcoal-800">
            {statusText}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      onClick={onInspect}
      className={`relative w-full h-[400px] md:h-[460px] cursor-pointer select-none ${className}`}
      title="Interactive 3D Document Stack — Move cursor to inspect specimen report"
    >
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <span className="text-[11px] font-mono font-semibold tracking-wider bg-ivory-50/90 dark:bg-charcoal-900/90 backdrop-blur px-3 py-1 rounded-full border border-ivory-200 dark:border-charcoal-800 text-forest-850 dark:text-forest-300 shadow-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse"></span>
          {statusText}
        </span>
        <span className="text-[10px] font-mono text-charcoal-500 dark:text-charcoal-400 bg-ivory-50/80 dark:bg-charcoal-900/80 px-2.5 py-0.5 rounded border border-ivory-200 dark:border-charcoal-800">
          POINTER TILT ACTIVE
        </span>
      </div>
    </div>
  );
};
