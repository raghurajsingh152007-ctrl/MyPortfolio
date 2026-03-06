import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const heading = useScrollReveal({ variant: "fade-up" });
  const image = useScrollReveal({ variant: "fade-right", delay: 200 });
  const text1 = useScrollReveal({ variant: "fade-left", delay: 100 });
  const text2 = useScrollReveal({ variant: "fade-left", delay: 250 });
  const text3 = useScrollReveal({ variant: "fade-left", delay: 400 });
  const tags = useScrollReveal({ variant: "zoom-in", delay: 500 });

  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={heading.ref} style={heading.style}>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">About</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Who I am
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-5 gap-12 items-center">
          <div ref={image.ref} style={image.style} className="md:col-span-2 flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-muted flex items-center justify-center border border-border overflow-hidden group cursor-default" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="text-center transition-transform duration-500 group-hover:scale-110">
                <span className="font-heading text-6xl font-bold gradient-text">RS</span>
                <p className="text-sm text-muted-foreground mt-2">Raghuraj Singh</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-5">
            <div ref={text1.ref} style={text1.style}>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Hi, I'm <span className="text-foreground font-semibold">Raghu</span> — an aspiring Full Stack Developer and B.Tech Computer Science Engineering student at MT University, Punjab. I'm passionate about building clean, responsive web applications and continuously expanding my technical skillset.
              </p>
            </div>
            <div ref={text2.ref} style={text2.style}>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Currently focused on mastering modern web development, I enjoy working with HTML, CSS, Python, and C/C++. I believe in writing clean code, thoughtful UI design, and solving real-world problems through technology.
              </p>
            </div>
            <div ref={text3.ref} style={text3.style}>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and working on creative side projects that push my boundaries as a developer.
              </p>
            </div>

            <div ref={tags.ref} style={tags.style} className="flex flex-wrap gap-3 pt-2">
              {["Web Development", "Problem Solving", "Clean Code", "UI/UX"].map((tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105 cursor-default"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
