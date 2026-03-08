import { useScrollReveal } from "@/hooks/useScrollReveal";

const achievements = [
  {
    title: "Amazon Clone Project",
    description:
      "Built a full Amazon clone from scratch as the first milestone in the Full Stack Web Development journey, demonstrating proficiency in frontend architecture and responsive design.",
    date: "2025",
    icon: "🚀",
  },
  {
    title: "85+ GitHub Contributions",
    description:
      "Consistently contributing to open-source and personal projects, maintaining an active development presence with 85+ contributions in the past year.",
    date: "2025–2026",
    icon: "💻",
  },
  {
    title: "CGPA 8.8 in B.Tech CSE",
    description:
      "Maintaining an excellent academic record with a CGPA of 8.8 in Computer Science Engineering at Amity University, Punjab.",
    date: "Ongoing",
    icon: "🎓",
  },
  {
    title: "Barrel Network Project",
    description:
      "Developed Barrel Network, a TypeScript-based project showcasing modern development practices and collaborative coding skills.",
    date: "2026",
    icon: "⚡",
  },
];

const AchievementsSection = () => {
  const heading = useScrollReveal({ variant: "fade-up" });

  return (
    <section id="achievements" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      <div className="section-container relative">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.2em]">Achievements</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Milestones & Highlights
          </h2>
          <div className="w-12 h-1 rounded-full bg-primary mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-border">
            <div className="w-full bg-primary/30 animate-timeline-grow" style={{ transformOrigin: "top" }} />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {achievements.map((item, i) => (
              <AchievementItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AchievementItem = ({ item, index }: { item: typeof achievements[0]; index: number }) => {
  const card = useScrollReveal({ variant: "fade-left", delay: index * 120 });

  return (
    <div ref={card.ref} style={card.style} className="relative pl-16 sm:pl-20">
      {/* Timeline dot */}
      <div className="absolute left-4 sm:left-6 top-3 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 transition-transform duration-300 hover:scale-125">
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-15" />
      </div>

      <div className="group p-5 sm:p-7 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-primary/30 hover:-translate-y-1" style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2.5">
              <span className="text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block shrink-0">{item.icon}</span>
              <h3 className="font-heading font-semibold text-foreground text-base sm:text-lg group-hover:text-primary transition-colors duration-300 break-words">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {item.description}
            </p>
          </div>
          <span className="text-xs text-muted-foreground font-medium whitespace-nowrap bg-muted px-3 py-1.5 rounded-full self-start shrink-0 border border-border">
            {item.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
