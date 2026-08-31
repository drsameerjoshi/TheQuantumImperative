import React, { useEffect, useRef } from 'react';

export const QuantumBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Quantum circuit nodes
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: 'gold' | 'quantum' | 'ember';
      alpha: number;
    }

    const nodeCount = Math.min(Math.floor((width * height) / 18000), 70);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const typeRand = Math.random();
      const color: 'gold' | 'quantum' | 'ember' =
        typeRand < 0.45 ? 'quantum' : typeRand < 0.8 ? 'gold' : 'ember';

      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        color,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    // Ember particles rising from bottom
    interface Ember {
      x: number;
      y: number;
      vy: number;
      vx: number;
      size: number;
      alpha: number;
      decay: number;
    }

    const embers: Ember[] = [];
    const maxEmbers = 35;

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render glowing circuit connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Update positions
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Wrap around boundaries
        if (nodeA.x < 0) nodeA.x = width;
        if (nodeA.x > width) nodeA.x = 0;
        if (nodeA.y < 0) nodeA.y = height;
        if (nodeA.y > height) nodeA.y = 0;

        // Mouse gentle repulsion/attraction
        const dxMouse = nodeA.x - mouseX;
        const dyMouse = nodeA.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 120 && distMouse > 0) {
          nodeA.x += (dxMouse / distMouse) * 0.8;
          nodeA.y += (dyMouse / distMouse) * 0.8;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            if (nodeA.color === 'quantum' || nodeB.color === 'quantum') {
              ctx.strokeStyle = `rgba(0, 229, 255, ${lineAlpha})`;
            } else if (nodeA.color === 'gold' || nodeB.color === 'gold') {
              ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
            } else {
              ctx.strokeStyle = `rgba(234, 88, 12, ${lineAlpha})`;
            }
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw Node point
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        if (nodeA.color === 'quantum') {
          ctx.fillStyle = `rgba(0, 229, 255, ${nodeA.alpha})`;
          ctx.shadowColor = '#00e5ff';
        } else if (nodeA.color === 'gold') {
          ctx.fillStyle = `rgba(212, 175, 55, ${nodeA.alpha})`;
          ctx.shadowColor = '#d4af37';
        } else {
          ctx.fillStyle = `rgba(249, 115, 22, ${nodeA.alpha})`;
          ctx.shadowColor = '#f97316';
        }
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Manage and render subtle ember particles
      if (embers.length < maxEmbers && Math.random() < 0.25) {
        embers.push({
          x: Math.random() * width,
          y: height + 10,
          vy: -(Math.random() * 0.8 + 0.4),
          vx: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.8,
          alpha: Math.random() * 0.6 + 0.3,
          decay: Math.random() * 0.003 + 0.002,
        });
      }

      for (let i = embers.length - 1; i >= 0; i--) {
        const ember = embers[i];
        ember.x += ember.vx;
        ember.y += ember.vy;
        ember.alpha -= ember.decay;

        if (ember.alpha <= 0 || ember.y < -10) {
          embers.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${ember.alpha})`;
        ctx.shadowColor = '#ea580c';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Ambient Radial Gradients mirroring the book cover */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-quantum-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[700px] h-[500px] bg-ember-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[180px] pointer-events-none" />
    </div>
  );
};
