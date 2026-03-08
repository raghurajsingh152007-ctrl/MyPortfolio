import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90, icon: <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.071-.757.541-6.03.088-.967H5.879l.174 1.99 1.597 17.928 4.326 1.236 4.403-1.259 1.678-18.917h-5.29l-.37 4.178h-2.906l-.263-2.878H5.879l.174 1.99H9.31l-.779 8.614z" /></svg> },
      { name: "CSS", level: 85, icon: <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.002l5.355-1.12.93-13.47z" /></svg> },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 75, icon: <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.89.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" /></svg> },
      { name: "C", level: 70, icon: <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5 5.0451 6.5 3.184 0 3.5381-3.221 3.5381-3.221l3.184.67s.354 4.128-6.5381 4.128C6.6091 20.0232 3 16.3282 3 12.0012c0-4.327 3.293-7.875 9.8171-7.875 6.524 0 6.9591 5.075 6.9591 5.075l-3.184-.005z" /></svg> },
      { name: "C++", level: 70, icon: <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" /></svg> },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 75, icon: <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 11-1.103 1.033l-2.48-2.48v6.53a1.838 1.838 0 11-1.512-.122V8.781a1.838 1.838 0 01-.998-2.41L7.629 3.64.452 10.816a1.55 1.55 0 000 2.188l10.48 10.48a1.55 1.55 0 002.186 0l10.43-10.43a1.55 1.55 0 000-2.123z" /></svg> },
      { name: "VS Code", level: 90, icon: <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" /></svg> },
    ],
  },
];

const SkillsSection = () => {
  const heading = useScrollReveal({ variant: "fade-up" });

  return (
    <section id="skills" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      <div className="section-container relative">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.2em]">Tech Stack</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Technologies I work with
          </h2>
          <div className="w-12 h-1 rounded-full bg-primary mx-auto mt-4" />
        </div>

        <div className="space-y-12 sm:space-y-16">
          {skillCategories.map((cat, catIdx) => (
            <SkillCategory key={cat.category} category={cat} index={catIdx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const reveal = useScrollReveal({ variant: "fade-up", delay: index * 100 });

  return (
    <div ref={reveal.ref} style={reveal.style}>
      <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
        <span className="w-8 h-0.5 bg-primary rounded-full" />
        {category.category}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {category.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill, index }: { skill: { name: string; level: number; icon: React.ReactNode }; index: number }) => {
  const card = useScrollReveal({ variant: "fade-up", delay: index * 80 });

  return (
    <div
      ref={card.ref}
      style={{ ...card.style, boxShadow: 'var(--shadow-card)' }}
      className="group p-5 sm:p-6 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
    >
      <div className="flex items-center gap-4">
        <div className="text-muted-foreground group-hover:text-primary transition-all duration-400 group-hover:scale-110 shrink-0">
          {skill.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <span className="font-heading font-semibold text-foreground text-sm">{skill.name}</span>
            <span className="text-xs text-muted-foreground">{skill.level}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-border overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: card.isVisible ? `${skill.level}%` : '0%',
                background: 'var(--gradient-accent)',
                transitionDelay: `${index * 150}ms`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
