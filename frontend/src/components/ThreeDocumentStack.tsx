import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Props {
  isScanning?: boolean;
  statusText?: string;
  onInspect?: () => void;
  className?: string;
}

export const ThreeDocumentStack: React.FC<Props> = ({
  isScanning = false,
  statusText = 'CLINICAL SPECIMEN: ACTIVE',
  onInspect,
  className = '',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWebglSupported(false);
      return;
    }

    // Check for WebGL support
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

    const width = container.clientWidth || 420;
    const height = container.clientHeight || 340;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup (Clinical Surgical & Soft Ambient)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const topDirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    topDirLight.position.set(4, 8, 6);
    topDirLight.castShadow = true;
    topDirLight.shadow.mapSize.width = 1024;
    topDirLight.shadow.mapSize.height = 1024;
    scene.add(topDirLight);

    const rimTealLight = new THREE.DirectionalLight(0x14b8a6, 1.6);
    rimTealLight.position.set(-6, -2, 4);
    scene.add(rimTealLight);

    // 3. Create Document Texture via HTML Canvas
    const docCanvas = document.createElement('canvas');
    docCanvas.width = 1024;
    docCanvas.height = 1440;
    const ctx = docCanvas.getContext('2d');
    if (ctx) {
      // Paper background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, 1024, 1440);

      // Clinical top header bar
      ctx.fillStyle = '#0F766E';
      ctx.fillRect(60, 60, 904, 80);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 36px Inter, sans-serif';
      ctx.fillText('METROPOLIS PATHOLOGY ENCLAVE', 90, 114);

      ctx.font = '20px Inter, sans-serif';
      ctx.fillText('REF ID: MET-98421 // SPECIMEN VERIFIED', 560, 112);

      // Patient metadata strip
      ctx.fillStyle = '#F1F5F9';
      ctx.fillRect(60, 160, 904, 90);

      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 24px Inter, sans-serif';
      ctx.fillText('PATIENT: John Doe (46 Y / M)', 90, 204);
      ctx.font = '20px Inter, sans-serif';
      ctx.fillText('FASTING METABOLIC & HEMATOLOGY PANEL', 90, 232);

      // Dividers & Biomarker lines
      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(60, 280);
      ctx.lineTo(964, 280);
      ctx.stroke();

      const testRows = [
        ['Hemoglobin (Hb)', '10.8 g/dL', '13.0 - 17.5', 'POTENTIALLY LOW'],
        ['White Blood Cell Count', '6,500 /mcL', '4000 - 11000', 'NORMAL'],
        ['Platelet Count', '240,000 /mcL', '150000 - 450000', 'NORMAL'],
        ['Fasting Blood Glucose', '132.0 mg/dL', '70.0 - 99.0', 'POTENTIALLY HIGH'],
        ['Total Cholesterol', '224.0 mg/dL', '125.0 - 200.0', 'POTENTIALLY HIGH'],
        ['Serum Creatinine', '0.90 mg/dL', '0.60 - 1.30', 'NORMAL'],
        ['Blood Urea Nitrogen (BUN)', '28.0 mg/dL', '7.0 - 20.0', 'POTENTIALLY HIGH'],
        ['Thyroid Stimulating Hormone (TSH)', '2.10 uIU/mL', '0.40 - 4.50', 'NORMAL'],
      ];

      testRows.forEach((row, i) => {
        const y = 340 + i * 85;
        // Subtle row separator
        ctx.fillStyle = i % 2 === 0 ? '#F8FAFC' : '#FFFFFF';
        ctx.fillRect(60, y - 35, 904, 75);

        ctx.fillStyle = '#0F172A';
        ctx.font = 'bold 24px Inter, sans-serif';
        ctx.fillText(row[0], 90, y + 8);

        ctx.font = 'bold 26px JetBrains Mono, monospace';
        ctx.fillText(row[1], 460, y + 8);

        ctx.fillStyle = '#64748B';
        ctx.font = '20px Inter, sans-serif';
        ctx.fillText('Ref: ' + row[2], 660, y + 8);

        if (row[3].includes('HIGH')) {
          ctx.fillStyle = '#E11D48';
          ctx.font = 'bold 18px Inter, sans-serif';
          ctx.fillText('▲ ' + row[3], 830, y + 8);
        } else if (row[3].includes('LOW')) {
          ctx.fillStyle = '#F59E0B';
          ctx.font = 'bold 18px Inter, sans-serif';
          ctx.fillText('▼ ' + row[3], 830, y + 8);
        } else {
          ctx.fillStyle = '#10B981';
          ctx.font = 'bold 18px Inter, sans-serif';
          ctx.fillText('✓ NORMAL', 830, y + 8);
        }
      });

      // Bottom Watermark & Security Enclave seal
      ctx.fillStyle = '#0D9488';
      ctx.fillRect(60, 1340, 904, 40);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px JetBrains Mono, monospace';
      ctx.fillText('ORCA CLINICAL ENCLAVE // DETERMINISTIC REFERENCE RANGE ENGINE // ZERO CLOUD API', 90, 1366);
    }

    const docTexture = new THREE.CanvasTexture(docCanvas);
    docTexture.minFilter = THREE.LinearFilter;

    // 4. Document Stack Group
    const stackGroup = new THREE.Group();
    scene.add(stackGroup);

    // Document Dimensions (Aspect ratio 1 : 1.414 standard A4)
    const docWidth = 4.2;
    const docHeight = 5.9;
    const docDepth = 0.04;

    const paperGeometry = new THREE.BoxGeometry(docWidth, docHeight, docDepth);

    // Bottom Layer 3 (Background)
    const layer3Mat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.8,
    });
    const layer3Mesh = new THREE.Mesh(paperGeometry, layer3Mat);
    layer3Mesh.position.set(-0.15, -0.15, -0.12);
    layer3Mesh.rotation.z = -0.05;
    layer3Mesh.castShadow = true;
    layer3Mesh.receiveShadow = true;
    stackGroup.add(layer3Mesh);

    // Middle Layer 2
    const layer2Mat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.7,
    });
    const layer2Mesh = new THREE.Mesh(paperGeometry, layer2Mat);
    layer2Mesh.position.set(-0.08, -0.08, -0.06);
    layer2Mesh.rotation.z = -0.025;
    layer2Mesh.castShadow = true;
    layer2Mesh.receiveShadow = true;
    stackGroup.add(layer2Mesh);

    // Main Top Document (with text texture)
    const topMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.7 }), // right
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.7 }), // left
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.7 }), // top
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.7 }), // bottom
      new THREE.MeshStandardMaterial({ map: docTexture, roughness: 0.5, metalness: 0.05 }), // front
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.8 }), // back
    ];
    const topMesh = new THREE.Mesh(paperGeometry, topMaterials);
    topMesh.castShadow = true;
    topMesh.receiveShadow = true;
    stackGroup.add(topMesh);

    // Laser Scan Line Plane (Animated glowing teal bar)
    const laserGeo = new THREE.PlaneGeometry(docWidth * 1.05, 0.08);
    const laserMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    const laserMesh = new THREE.Mesh(laserGeo, laserMat);
    laserMesh.position.set(0, 0, 0.035);
    stackGroup.add(laserMesh);

    // Initial orientation
    stackGroup.rotation.x = 0.16;
    stackGroup.rotation.y = -0.22;

    // 5. Interactive Pointer Parallax
    let targetRotX = 0.16;
    let targetRotY = -0.22;
    let curRotX = 0.16;
    let curRotY = -0.22;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetRotY = -0.22 + x * 0.45;
      targetRotX = 0.16 - y * 0.45;
    };

    const handleMouseLeave = () => {
      targetRotX = 0.16;
      targetRotY = -0.22;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // 6. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth pointer rotation interpolation (lerp)
      curRotX += (targetRotX - curRotX) * 0.06;
      curRotY += (targetRotY - curRotY) * 0.06;

      stackGroup.rotation.x = curRotX;
      stackGroup.rotation.y = curRotY;

      // Animate laser scanning beam
      const scanPeriod = 2.4;
      const progress = (elapsedTime % scanPeriod) / scanPeriod;
      const scanY = 2.6 - progress * 5.2;
      laserMesh.position.y = scanY;
      laserMesh.material.opacity = 0.35 + Math.sin(progress * Math.PI) * 0.6;

      // Subtle breathing float
      stackGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Observer
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

  // High-Quality Accessible Static Fallback (if WebGL is disabled or unsupported)
  if (!webglSupported) {
    return (
      <div
        className={`relative flex items-center justify-center p-6 ${className}`}
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-80 bg-white dark:bg-slate-900 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-800 p-5 transform rotate-y-6 rotate-x-6 hover:rotate-0 transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400">METROPOLIS PATHOLOGY</span>
            <span className="text-[10px] bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">
              ACC-98421
            </span>
          </div>
          <div className="py-4 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Hemoglobin (Hb)</span>
              <span className="font-mono font-bold text-amber-600">10.8 g/dL (Low)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Fasting Glucose</span>
              <span className="font-mono font-bold text-rose-600">132.0 mg/dL (High)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 dark:text-slate-400">Platelet Count</span>
              <span className="font-mono font-bold text-emerald-600">240,000 /mcL (Norm)</span>
            </div>
          </div>
          <div className="text-[9px] text-slate-400 uppercase tracking-wider text-center pt-2 border-t border-slate-100 dark:border-slate-800">
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full h-[360px] md:h-[420px] cursor-pointer select-none ${className}`}
      title="Interactive 3D Document Stack — Move mouse to inspect clinical specimen"
    >
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <span className="text-[10px] font-mono font-semibold tracking-wider bg-white/80 dark:bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-slate-800 text-teal-700 dark:text-teal-300 shadow-sm flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
          {statusText}
        </span>
        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-900/70 backdrop-blur px-2 py-0.5 rounded border border-slate-200/60 dark:border-slate-800">
          3D PARALLAX ACTIVE
        </span>
      </div>
    </div>
  );
};
