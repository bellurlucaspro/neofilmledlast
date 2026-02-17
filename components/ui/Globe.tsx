"use client";
import { useEffect, useState } from "react";

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

/**
 * Lightweight Globe component using CSS animations instead of Three.js
 * Reduces bundle size by ~500KB while maintaining visual appeal
 */
export function World({ globeConfig, data }: WorldProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const defaultConfig = {
    globeColor: "#1d072e",
    atmosphereColor: "#ffffff",
    autoRotate: true,
    autoRotateSpeed: 1,
    ...globeConfig,
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Globe Container */}
      <div className="relative w-[400px] h-[400px]">
        {/* Main Globe Sphere */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${defaultConfig.globeColor}dd, ${defaultConfig.globeColor} 70%)`,
            boxShadow: `
              inset -25px -25px 40px rgba(0,0,0,.5),
              inset 10px 10px 20px rgba(255,255,255,.1),
              0 0 60px ${defaultConfig.atmosphereColor}33
            `,
            animation: defaultConfig.autoRotate ? 'globeRotate 60s linear infinite' : 'none',
          }}
        >
          {/* Grid Pattern Overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 400 400"
          >
            {/* Latitude lines */}
            {[...Array(9)].map((_, i) => {
              const y = (i + 1) * 40;
              const rx = 200;
              const ry = Math.abs(200 - y) * 0.3;
              return (
                <ellipse
                  key={`lat-${i}`}
                  cx="200"
                  cy="200"
                  rx={rx}
                  ry={ry}
                  fill="none"
                  stroke={defaultConfig.polygonColor || "rgba(255,255,255,0.3)"}
                  strokeWidth="0.5"
                  transform={`translate(0, ${y - 200})`}
                />
              );
            })}

            {/* Longitude lines */}
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30);
              return (
                <ellipse
                  key={`lon-${i}`}
                  cx="200"
                  cy="200"
                  rx="200"
                  ry="200"
                  fill="none"
                  stroke={defaultConfig.polygonColor || "rgba(255,255,255,0.3)"}
                  strokeWidth="0.5"
                  transform={`rotate(${angle}, 200, 200) scale(1, 0.3)`}
                />
              );
            })}
          </svg>

          {/* Connection Points (simulating data points) */}
          {data.slice(0, 20).map((point, i) => {
            const angle = (i / 20) * 360;
            const radius = 180;
            const x = 200 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 200 + radius * Math.sin((angle * Math.PI) / 180) * 0.5;

            return (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-pulse"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  backgroundColor: point.color || '#CB52EE',
                  boxShadow: `0 0 10px ${point.color || '#CB52EE'}`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '2s',
                }}
              />
            );
          })}
        </div>

        {/* Atmosphere Glow */}
        <div
          className="absolute inset-[-20px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${defaultConfig.atmosphereColor}15, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes globeRotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
}

// Export helper functions for compatibility
export function hexToRgb(hex: string) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}
