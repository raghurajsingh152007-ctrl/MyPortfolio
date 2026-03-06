import { useEffect, useRef, useState } from "react";

type AnimationVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "flip-up" | "blur-in" | "slide-rotate" | "scale-up";

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  variant?: AnimationVariant;
  once?: boolean;
}

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  delay = 0,
  variant = "fade-up",
  once = true,
}: UseScrollRevealOptions = {}) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay, once]);

  const getStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
      willChange: "opacity, transform, filter",
    };

    if (isVisible) {
      return { ...base, opacity: 1, transform: "none", filter: "none" };
    }

    switch (variant) {
      case "fade-up":
        return { ...base, opacity: 0, transform: "translateY(40px)" };
      case "fade-down":
        return { ...base, opacity: 0, transform: "translateY(-40px)" };
      case "fade-left":
        return { ...base, opacity: 0, transform: "translateX(-60px)" };
      case "fade-right":
        return { ...base, opacity: 0, transform: "translateX(60px)" };
      case "zoom-in":
        return { ...base, opacity: 0, transform: "scale(0.85)" };
      case "zoom-out":
        return { ...base, opacity: 0, transform: "scale(1.15)" };
      case "flip-up":
        return { ...base, opacity: 0, transform: "perspective(800px) rotateX(15deg) translateY(30px)" };
      case "blur-in":
        return { ...base, opacity: 0, filter: "blur(12px)", transform: "translateY(20px)" };
      case "slide-rotate":
        return { ...base, opacity: 0, transform: "translateX(-40px) rotate(-3deg)" };
      case "scale-up":
        return { ...base, opacity: 0, transform: "scale(0.92) translateY(20px)" };
      default:
        return { ...base, opacity: 0, transform: "translateY(40px)" };
    }
  };

  return { ref, style: getStyles(), isVisible };
};
