import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060B18, 0.05);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(200, 100, 0x3B6FFF, 0x0A1128);
    gridHelper.position.y = -5;
    const material = gridHelper.material as THREE.LineBasicMaterial;
    material.transparent = true;
    material.opacity = 0.15;
    scene.add(gridHelper);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        // Spread particles across a wide area
        posArray[i] = (Math.random() - 0.5) * 60;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create soft glowing dots
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const context = canvas.getContext('2d')!;
    const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(0, 240, 255, 0.8)');
    gradient.addColorStop(1, 'rgba(6, 11, 24, 0)');
    context.fillStyle = gradient;
    context.fillRect(0,0,16,16);
    const texture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.2,
        map: texture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 8;
    camera.position.y = 2;
    camera.rotation.x = -0.1;

    // Animation Loop
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
        const elapsedTime = clock.getElapsedTime();

        targetX = mouseX * 0.001;
        targetY = mouseY * 0.001;

        particlesMesh.rotation.y += 0.0005;
        gridHelper.position.z = (elapsedTime * 2) % 2; // Moving grid effect
        
        // Gentle camera sway
        camera.position.x += (targetX - camera.position.x) * 0.02;
        camera.position.y += (-targetY - camera.position.y + 2) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
        }
        cancelAnimationFrame(animationFrameId);
        
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        gridHelper.dispose();
        renderer.dispose();
    };
  }, []);

  return (
    <div 
        ref={mountRef} 
        className="fixed inset-0 min-h-screen w-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at center, #0B1638 0%, #060B18 100%)' }}
    />
  );
}
