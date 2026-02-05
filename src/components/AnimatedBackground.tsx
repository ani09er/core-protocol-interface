import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
  type: "normal" | "bright" | "large";
}

interface FloatingOrb {
  x: number;
  y: number;
  size: number;
  pulsePhase: number;
  driftX: number;
  driftY: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const orbsRef = useRef<FloatingOrb[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles with different types
    const particleCount = 80;
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => {
      const type = i < 10 ? "large" : i < 30 ? "bright" : "normal";
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: type === "large" ? Math.random() * 4 + 3 : type === "bright" ? Math.random() * 2 + 2 : Math.random() * 2 + 1,
        opacity: type === "large" ? 0.8 : type === "bright" ? 0.6 : 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        type,
      };
    });

    // Initialize floating orbs
    const orbCount = 5;
    orbsRef.current = Array.from({ length: orbCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 100 + 50,
      pulsePhase: Math.random() * Math.PI * 2,
      driftX: (Math.random() - 0.5) * 0.3,
      driftY: (Math.random() - 0.5) * 0.3,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;
      timeRef.current += 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw pulsing floating orbs (background glow)
      orbsRef.current.forEach((orb) => {
        orb.pulsePhase += 0.008;
        const pulse = Math.sin(orb.pulsePhase) * 0.3 + 0.7;
        
        // Drift movement
        orb.x += orb.driftX;
        orb.y += orb.driftY;
        
        // Wrap around
        if (orb.x < -orb.size) orb.x = canvas.width + orb.size;
        if (orb.x > canvas.width + orb.size) orb.x = -orb.size;
        if (orb.y < -orb.size) orb.y = canvas.height + orb.size;
        if (orb.y > canvas.height + orb.size) orb.y = -orb.size;

        // Draw orb with gradient
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size * pulse);
        gradient.addColorStop(0, `rgba(0, 229, 255, ${0.15 * pulse})`);
        gradient.addColorStop(0.5, `rgba(0, 200, 255, ${0.08 * pulse})`);
        gradient.addColorStop(1, "rgba(0, 180, 255, 0)");
        
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw hex grid with pulse
      const gridPulse = Math.sin(timeRef.current * 0.02) * 0.02 + 0.05;
      ctx.strokeStyle = `rgba(0, 229, 255, ${gridPulse})`;
      ctx.lineWidth = 1;
      const hexSize = 40;
      for (let y = 0; y < canvas.height + hexSize; y += hexSize * 1.5) {
        for (let x = 0; x < canvas.width + hexSize; x += hexSize * Math.sqrt(3)) {
          const offsetX = (Math.floor(y / (hexSize * 1.5)) % 2) * (hexSize * Math.sqrt(3) / 2);
          drawHexagon(ctx, x + offsetX, y, hexSize / 2);
        }
      }

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update pulse
        particle.pulsePhase += particle.pulseSpeed;
        const pulse = Math.sin(particle.pulsePhase) * 0.5 + 0.5;

        // Mouse interaction - stronger attraction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200) {
          const force = (200 - dist) / 200;
          particle.vx += dx * 0.00008 * force;
          particle.vy += dy * 0.00008 * force;
          particle.opacity = Math.min(1, particle.opacity + 0.02);
        } else {
          particle.opacity = Math.max(
            particle.type === "large" ? 0.5 : particle.type === "bright" ? 0.4 : 0.2,
            particle.opacity - 0.008
          );
        }

        // Apply velocity with damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        const currentSize = particle.size * (0.8 + pulse * 0.4);
        const currentOpacity = particle.opacity * (0.7 + pulse * 0.3);

        // Outer glow
        if (particle.type !== "normal") {
          const glowGradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, currentSize * 4
          );
          glowGradient.addColorStop(0, `rgba(0, 229, 255, ${currentOpacity * 0.4})`);
          glowGradient.addColorStop(0.5, `rgba(0, 200, 255, ${currentOpacity * 0.1})`);
          glowGradient.addColorStop(1, "rgba(0, 180, 255, 0)");
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, currentSize * 4, 0, Math.PI * 2);
          ctx.fillStyle = glowGradient;
          ctx.fill();
        }

        // Core particle
        const coreGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize
        );
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`);
        coreGradient.addColorStop(0.3, `rgba(0, 255, 255, ${currentOpacity * 0.9})`);
        coreGradient.addColorStop(1, `rgba(0, 200, 255, ${currentOpacity * 0.3})`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = coreGradient;
        ctx.fill();
      });

      // Draw connections with gradient
      particlesRef.current.forEach((p1, i) => {
        if (p1.type === "normal") return; // Only connect bright/large particles
        
        particlesRef.current.slice(i + 1).forEach((p2) => {
          if (p2.type === "normal") return;
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const lineOpacity = (1 - dist / 180) * 0.4;
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(0, 229, 255, ${lineOpacity * p1.opacity})`);
            gradient.addColorStop(0.5, `rgba(0, 255, 255, ${lineOpacity * 0.8})`);
            gradient.addColorStop(1, `rgba(0, 229, 255, ${lineOpacity * p2.opacity})`);
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw energy waves from mouse
      const waveRadius = (timeRef.current % 120) * 3;
      const waveOpacity = Math.max(0, 0.15 - (waveRadius / 360) * 0.15);
      if (waveOpacity > 0) {
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, waveRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 229, 255, ${waveOpacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const hx = x + radius * Math.cos(angle);
      const hy = y + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(hx, hy);
      else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.stroke();
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: 0.85 }}
      />
      {/* Gradient overlays */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background opacity-60" />
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(185 100% 55% / 0.15) 0%, transparent 60%)",
        }}
      />
      {/* Corner accent glows */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-0 h-96 w-96"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(ellipse at 0% 0%, hsl(185 100% 55% / 0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="pointer-events-none fixed bottom-0 right-0 z-0 h-96 w-96"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          background: "radial-gradient(ellipse at 100% 100%, hsl(200 100% 60% / 0.12) 0%, transparent 70%)",
        }}
      />
    </>
  );
};
