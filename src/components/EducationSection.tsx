import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const EducationSection = () => {
  const heading = useScrollReveal({ variant: "fade-up" });
  const card = useScrollReveal({ variant: "scale-up", delay: 200 });

  return (
    <section id="education" className="py-24 sm:py-32 lg:py-40 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="section-container relative">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.2em]">Education</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Academic Background
          </h2>
          <div className="w-12 h-1 rounded-full bg-primary mx-auto mt-4" />
        </div>

        <div ref={card.ref} style={card.style} className="max-w-2xl mx-auto">
          <div className="group p-7 sm:p-10 rounded-3xl bg-background border border-border transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 relative overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.03), transparent)' }} />

            <div className="relative flex flex-col sm:flex-row items-start gap-5">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: 'var(--gradient-accent)' }}>
                <span className="text-primary-foreground text-xl">🎓</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                  B.Tech — Computer Science Engineering
                </h3>
                <p className="text-muted-foreground mt-1.5 text-sm sm:text-base">CSE Core</p>

                <div className="mt-4 flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-sm text-foreground font-medium">Amity University, Punjab</span>
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-muted/50 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Current CGPA</span>
                    <span className="font-heading text-2xl sm:text-3xl font-bold gradient-text">8.8</span>
                  </div>
                  <AnimatedProgressBar />
                  <p className="text-xs text-muted-foreground mt-3">Out of 10.0 scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedProgressBar = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(88), 300);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={barRef} className="h-2.5 rounded-full bg-border overflow-hidden">
      <div
        className="h-full rounded-full relative"
        style={{
          width: `${width}%`,
          background: 'var(--gradient-accent)',
          transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="absolute inset-0 rounded-full animate-shimmer" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--primary-foreground) / 0.1), transparent)', backgroundSize: '200% 100%' }} />
      </div>
    </div>
  );
};

export default EducationSection;
