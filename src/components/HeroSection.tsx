import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Animated floating orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl animate-pulse-gentle" />

      {/* Particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20 animate-drift"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 pt-16">
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(30px) scale(0.95)",
            filter: mounted ? "none" : "blur(8px)",
          }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 animate-shimmer">
            Available for opportunities
          </span>
        </div>

        <h1
          className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight transition-all duration-1000 ease-out delay-150"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(40px)",
            filter: mounted ? "none" : "blur(10px)",
          }}
        >
          <span className="inline-block animate-text-reveal">Raghuraj</span>{" "}
          <span className="inline-block animate-text-reveal" style={{ animationDelay: "0.1s" }}>Singh</span>
        </h1>

        <p
          className="mt-4 text-xl sm:text-2xl font-heading font-medium text-muted-foreground transition-all duration-1000 ease-out delay-300"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(30px)",
          }}
        >
          Computer Science Engineering Student
        </p>

        <p
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-500"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
          }}
        >
          Aspiring Full Stack Developer currently mastering modern web technologies.
          Passionate about building responsive, user-centric web applications and
          exploring the frontiers of software engineering.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px) scale(0.95)",
          }}
        >
          <a
            href="mailto:raghurajsingh152007@gmail.com"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
            style={{ boxShadow: 'var(--shadow-button)' }}
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </a>
          <a
            href="tel:+919817679706"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-card text-foreground font-medium text-sm border border-border transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:animate-phone-ring" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 transition-all duration-1000 ease-out delay-1000"
          style={{ opacity: mounted ? 1 : 0 }}
        >
          <div className="animate-bounce-slow flex flex-col items-center gap-1">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
