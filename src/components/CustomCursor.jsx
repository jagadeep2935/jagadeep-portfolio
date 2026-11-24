import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hoveredState, setHoveredState] = useState({ active: false, label: '' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over an interactive element with custom cursor label attribute
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const label = target.getAttribute('data-cursor') || 'EXPLORE';
        setHoveredState({ active: true, label });
      } else if (e.target.closest('a, button, input, textarea, select')) {
        setHoveredState({ active: true, label: 'VIEW' });
      } else {
        setHoveredState({ active: false, label: '' });
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Dot */}
      <div
        className="fixed w-2 h-2 bg-[#00F5D4] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_10px_#00F5D4]"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Expanding Ring & Badge */}
      <div
        className={`fixed rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out flex items-center justify-center border ${
          hoveredState.active
            ? 'w-14 h-14 bg-[#00F5D4]/15 border-[#00F5D4] scale-110 shadow-[0_0_20px_rgba(0,245,212,0.3)]'
            : 'w-8 h-8 border-white/20 scale-100'
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {hoveredState.active && hoveredState.label && (
          <span className="font-mono text-[9px] font-extrabold text-[#00F5D4] tracking-wider uppercase animate-in fade-in zoom-in duration-150">
            {hoveredState.label}
          </span>
        )}
      </div>
    </div>
  );
}
