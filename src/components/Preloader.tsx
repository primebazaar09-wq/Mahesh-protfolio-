import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onLoaded: () => void;
  name: string;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoaded, name }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setFading(true);
          setTimeout(() => {
            onLoaded();
          }, 400);
          return 100;
        }
        return prev + 15;
      });
    }, 45);

    // Safety timeout
    const timeout = setTimeout(() => {
      setFading(true);
      setTimeout(onLoaded, 300);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Futuristic glowing geometric emblem */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          {/* Outer rotating neon ring */}
          <div className="absolute inset-0 rounded-full border border-indigo-500/30 border-t-indigo-400 animate-spin" style={{ animationDuration: '3s' }} />
          {/* Inner counter-rotating ring */}
          <div className="absolute inset-2 rounded-full border border-violet-500/20 border-b-cyan-400 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
          
          {/* Center Initial */}
          <div className="w-14 h-14 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-center shadow-lg shadow-indigo-500/20 backdrop-blur-sm">
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-indigo-300 font-display">
              {name.charAt(0)}
            </span>
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center space-y-1 mb-6">
          <div className="text-sm font-bold tracking-widest text-white uppercase font-display">
            {name}
          </div>
          <div className="text-[11px] font-mono tracking-wider text-zinc-500">
            CREATIVE STUDIO · SYSTEM INITIALIZING
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-2 text-[10px] font-mono text-zinc-600">
          {progress}%
        </div>
      </div>
    </div>
  );
};
