import { useEffect, useState, useCallback } from "react";

const roles = [
  "Full Stack Developer",
  "Frontend Engineer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const displayedRole = roles[roleIndex].substring(0, charIndex);

  return (
    <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Spotlight glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)' }} />

      {/* Animated floating orbs */}
      <div className="absolute top-20 right-[10%] w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-primary/5 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-[5%] w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-secondary/10 blur-3xl animate-float-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-primary/[0.03] blur-3xl animate-pulse-gentle" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20 animate-drift"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${6 + i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container text-center relative z-10 py-24 sm:py-32">
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(30px) scale(0.95)",
            filter: mounted ? "none" : "blur(8px)",
          }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-8 border border-primary/20 animate-shimmer">
            ✦ Available for opportunities
          </span>
        </div>

        <h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-foreground leading-[1.05] transition-all duration-1000 ease-out delay-150"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(40px)",
            filter: mounted ? "none" : "blur(10px)",
          }}
        >
          <span className="inline-block animate-text-reveal">Raghuraj</span>
          <br className="sm:hidden" />{" "}
          <span className="inline-block animate-text-reveal gradient-text" style={{ animationDelay: "0.15s" }}>Singh</span>
        </h1>

        {/* Typing effect role */}
        <div
          className="mt-6 h-10 sm:h-12 flex items-center justify-center transition-all duration-1000 ease-out delay-300"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(30px)",
          }}
        >
          <span className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
            {displayedRole}
            <span className="animate-blink text-primary ml-0.5">|</span>
          </span>
        </div>

        <p
          className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-500"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
          }}
        >
          Crafting responsive, user-centric web applications with modern technologies.
          Passionate about clean architecture and exceptional user experiences.
        </p>

        {/* Stats row */}
        <div
          className="mt-8 sm:mt-10 flex items-center justify-center gap-6 sm:gap-10 transition-all duration-1000 ease-out delay-600"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
          }}
        >
          {[
            { value: "5+", label: "Projects" },
            { value: "100+", label: "Contributions" },
            { value: "8.08", label: "CGPA" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 ease-out delay-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px) scale(0.95)",
          }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-[0.98] glow-button"
            style={{ boxShadow: 'var(--shadow-button)' }}
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            View Projects
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-card/80 backdrop-blur-sm text-foreground font-medium text-sm border border-border transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 active:scale-[0.98]"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 sm:mt-20 transition-all duration-1000 ease-out delay-1000"
          style={{ opacity: mounted ? 1 : 0 }}
        >
          <a href="#about" className="animate-bounce-slow inline-flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase">Scroll to explore</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
