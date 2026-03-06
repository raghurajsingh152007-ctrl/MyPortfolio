import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const EducationSection = () => {
  const heading = useScrollReveal({ variant: "fade-up" });
  const card = useScrollReveal({ variant: "zoom-in", delay: 200 });

  return (
    <section id="education" className="py-24 sm:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={heading.ref} style={heading.style}>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Education</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Academic background
          </h2>
        </div>

        <div ref={card.ref} style={card.style} className="mt-12 max-w-2xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-background border border-border hover-lift" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 animate-gradient-shift" style={{ background: 'var(--gradient-accent)' }}>
                <span className="text-primary-foreground text-lg">🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  B.Tech — Computer Science Engineering
                </h3>
                <p className="text-muted-foreground mt-1">CSE Core</p>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm text-foreground font-medium">MT University, Punjab</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-muted border border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Current CGPA</span>
                    <span className="font-heading text-2xl font-bold gradient-text">8.8</span>
                  </div>
                  <AnimatedProgressBar />
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
    <div ref={barRef} className="mt-3 h-2 rounded-full bg-border overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1500 ease-out"
        style={{
          width: `${width}%`,
          background: 'var(--gradient-accent)',
          transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
};

export default EducationSection;
