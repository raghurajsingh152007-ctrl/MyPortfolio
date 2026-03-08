import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "85+", label: "GitHub Contributions" },
  { value: "8.8", label: "CGPA" },
];

const AboutSection = () => {
  const heading = useScrollReveal({ variant: "fade-up" });
  const avatar = useScrollReveal({ variant: "scale-up", delay: 150 });
  const bio = useScrollReveal({ variant: "fade-up", delay: 200 });
  const statsReveal = useScrollReveal({ variant: "fade-up", delay: 400 });

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="section-container relative">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.2em]">About</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Who I am
          </h2>
          <div className="w-12 h-1 rounded-full bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Avatar */}
          <div ref={avatar.ref} style={avatar.style} className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl bg-muted flex items-center justify-center border border-border overflow-hidden" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="text-center transition-transform duration-500 group-hover:scale-105">
                  <span className="font-heading text-6xl sm:text-7xl font-bold gradient-text">RS</span>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">Raghuraj Singh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div ref={bio.ref} style={bio.style} className="lg:col-span-8 space-y-5">
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Hi, I'm <span className="text-foreground font-semibold">Raghu</span> — an aspiring Full Stack Developer and B.Tech Computer Science Engineering student at Amity University, Punjab. I'm passionate about building clean, responsive web applications and continuously expanding my technical skillset.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              Currently focused on mastering modern web development, I enjoy working with HTML, CSS, Python, and C/C++. I believe in writing clean code, thoughtful UI design, and solving real-world problems through technology.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and working on creative side projects that push my boundaries as a developer.
            </p>

            <div className="flex flex-wrap gap-2 pt-3">
              {["Web Development", "Problem Solving", "Clean Code", "UI/UX", "Open Source"].map((tag, i) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-primary/8 text-primary border border-primary/15 transition-all duration-300 hover:bg-primary/15 hover:scale-105 hover:border-primary/30 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="mailto:raghurajsingh152007@gmail.com"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsReveal.ref} style={statsReveal.style} className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 sm:p-8 rounded-2xl bg-background border border-border transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 group"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="font-heading text-3xl sm:text-4xl font-bold gradient-text transition-transform duration-300 group-hover:scale-110">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
