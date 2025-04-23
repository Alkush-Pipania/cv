
import React, { useEffect, useState } from 'react';
import { Progress } from './ui/progress';
import { useIsMobile } from '@/hooks/use-mobile';
import '../3d-objects.css';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 3 + Math.random() * 4;
      if (current >= 100) {
        setProgress(100);
        setTimeout(onComplete, 350);
        clearInterval(interval);
      } else {
        setProgress(Math.floor(current));
      }
    }, 33);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-container fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6 max-w-xs mx-auto text-center">
        {/* 3D cube solve animation */}
        <div className="cube-loader mb-2">
          <div className="cube-loader-inner">
            <div className="cube-face cube-face-front" />
            <div className="cube-face cube-face-back" />
            <div className="cube-face cube-face-right" />
            <div className="cube-face cube-face-left" />
            <div className="cube-face cube-face-top" />
            <div className="cube-face cube-face-bottom" />
          </div>
        </div>
        <h2 className="text-neon text-4xl font-bold">{progress}%</h2>
        <div className="w-full max-w-md">
          <Progress value={progress} className="h-2 bg-glass-bg-dark" indicatorClassName="bg-neon" />
        </div>
        <p className="text-white/60 text-sm mt-4">Loading portfolio...</p>
      </div>
    </div>
  );
}
