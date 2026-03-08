import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with fine pointer (no touch)
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select, .hover-lift, .group")) {
        setIsHovering(true);
      }
    };

    const onOut = () => setIsHovering(false);

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${pos.x - (isHovering ? 20 : 12)}px, ${pos.y - (isHovering ? 20 : 12)}px) scale(${isHovering ? 1 : 0.6})`,
      }}
    >
      <div
        className={`rounded-full transition-all duration-300 ${isHovering ? 'w-10 h-10' : 'w-6 h-6'}`}
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / ${isHovering ? 0.3 : 0.15}) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
