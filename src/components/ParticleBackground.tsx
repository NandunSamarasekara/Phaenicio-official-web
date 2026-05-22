import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const location = useLocation();
  const [isHiddenOnHero, setIsHiddenOnHero] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  // Sync scroll visibility state
  useEffect(() => {
    const updateVisibility = () => {
      const shouldHide = location.pathname === '/' && window.scrollY < window.innerHeight * 0.82;
      setIsHiddenOnHero(shouldHide);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [location.pathname]);

  // Main canvas animation logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Disable alpha channel on primary context for faster background renders
    if (!ctx) return;

    const CONFIG = {
      blobAlpha: 0.3,
    };

    let w = 0;
    let h = 0;
    let dpr = 1;

    const blobs = [
      { x: 0.22, y: 0.24, size: 0.48, speedX: 0.00012, speedY: 0.00009, phase: 0, color: '10,15,45' },
      { x: 0.72, y: 0.3, size: 0.44, speedX: 0.0001, speedY: 0.00008, phase: 1.3, color: '85,85,92' },
      { x: 0.5, y: 0.78, size: 0.52, speedX: 0.00008, speedY: 0.00011, phase: 2.1, color: '115,120,130' },
    ];
    const startTime = performance.now();

    // Create static offscreen grain canvas pattern once to avoid O(N) pixel loops on every frame
    const createGrainPattern = () => {
      const grainCanvas = document.createElement('canvas');
      grainCanvas.width = 128;
      grainCanvas.height = 128;
      const grainCtx = grainCanvas.getContext('2d');
      if (!grainCtx) return null;

      grainCtx.fillStyle = 'rgba(18, 25, 38, 0.015)';
      const pixelCount = Math.floor(128 * 128 * 0.04); // 4% noise density
      for (let i = 0; i < pixelCount; i++) {
        const x = Math.random() * 128;
        const y = Math.random() * 128;
        grainCtx.fillRect(x, y, 1, 1);
      }
      return ctx.createPattern(grainCanvas, 'repeat');
    };

    const grainPattern = createGrainPattern();

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBase = () => {
      const gradient = ctx.createLinearGradient(0, 0, w, h);
      gradient.addColorStop(0, '#f8fafc');
      gradient.addColorStop(0.5, '#f1f5f9');
      gradient.addColorStop(1, '#e2e8f0');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    };

    const drawBlobs = (elapsed: number) => {
      for (const blob of blobs) {
        const x = (blob.x + Math.sin(elapsed * blob.speedX + blob.phase) * 0.08) * w;
        const y = (blob.y + Math.cos(elapsed * blob.speedY + blob.phase) * 0.07) * h;
        const radius = blob.size * Math.min(w, h);

        const radial = ctx.createRadialGradient(x, y, radius * 0.1, x, y, radius);
        radial.addColorStop(0, `rgba(${blob.color}, ${CONFIG.blobAlpha})`);
        radial.addColorStop(1, `rgba(${blob.color}, 0)`);
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawGrain = () => {
      if (grainPattern) {
        ctx.fillStyle = grainPattern;
        ctx.fillRect(0, 0, w, h);
      }
    };

    const drawVignette = () => {
      const radial = ctx.createRadialGradient(w * 0.5, h * 0.4, h * 0.25, w * 0.5, h * 0.5, h * 0.95);
      radial.addColorStop(0, 'rgba(255,255,255,0)');
      radial.addColorStop(1, 'rgba(15,23,42,0.08)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, w, h);
    };

    const renderFrame = (isStatic = false) => {
      const elapsed = performance.now() - startTime;
      drawBase();
      drawBlobs(isStatic ? 0 : elapsed);
      drawGrain();
      drawVignette();
    };

    const animate = () => {
      // Pause updates if the canvas is currently hidden
      if (!isHiddenOnHero) {
        renderFrame(false);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      renderFrame(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };

    resize();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      renderFrame(true);
    } else {
      animate();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHiddenOnHero]); // Re-initialize loop check when visibility shifts to pause/unpause correctly

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-500 ${isHiddenOnHero ? 'opacity-0' : 'opacity-100'}`}
    />
  );
};

export default ParticleBackground;