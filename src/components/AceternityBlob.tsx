
import React, { useEffect, useRef } from "react";

/**
 * Aceternity-inspired animated blob for hero background.
 * Uses Canvas and GSAP for pseudo-3D glassy blob.
 */
const AceternityBlob = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    function drawBlob(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width/2, height/2);
      ctx.beginPath();
      for(let i=0; i<=360; i++) {
        let angle = i * Math.PI / 180;
        // Organic, wavy radii
        let offset = Math.sin(angle*6 + time/900) * 30;
        let r = 125 + 36*Math.sin(time/1700) + offset;
        let x = Math.cos(angle) * r;
        let y = Math.sin(angle) * r;
        if(i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      const gradient = ctx.createRadialGradient(0,0,120,0,0,160);
      gradient.addColorStop(0, "#9b87f5dd");
      gradient.addColorStop(1, "#1a1f2cd9");
      ctx.fillStyle = gradient;
      ctx.shadowColor = "#9b87f5cc";
      ctx.shadowBlur = 90;
      ctx.globalAlpha = 0.88;
      ctx.fill();
      ctx.restore();
    }

    function animateBlob(time: number) {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      drawBlob(time);
      requestAnimationFrame(animateBlob);
    }
    requestAnimationFrame(animateBlob);

    // Responsive
    window.addEventListener("resize", () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    });
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        width={380}
        height={380}
        style={{width:"380px",height:"380px",filter:"blur(1px)"}}
        className="drop-shadow-[0_0_40px_#9b87f5aa] opacity-95 md:w-[450px] md:h-[450px] lg:w-[530px] lg:h-[530px] rounded-full"
      />
    </div>
  );
};

export default AceternityBlob;
