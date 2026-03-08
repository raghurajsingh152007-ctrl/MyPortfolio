import { useEffect, useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

const languageColor: Record<string, string> = {
  HTML: "bg-orange-400",
  CSS: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-600",
  Python: "bg-green-500",
  "C++": "bg-pink-500",
  C: "bg-gray-500",
};

const ProjectsSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const heading = useScrollReveal({ variant: "fade-up" });

  useEffect(() => {
    fetch("https://api.github.com/users/raghurajsingh152007-ctrl/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data.slice(0, 6));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-24 sm:py-32 lg:py-40 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="section-container relative">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.2em]">Projects</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-lg mx-auto">
            A collection of projects I've built, from full-stack applications to creative experiments.
          </p>
          <div className="w-12 h-1 rounded-full bg-primary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {loading
            ? [1, 2, 3].map((i) => (
                <div key={i} className="h-56 rounded-2xl bg-muted animate-pulse" />
              ))
            : repos.map((repo, i) => (
                <ProjectCard key={repo.id} repo={repo} index={i} />
              ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/raghurajsingh152007-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-primary border border-primary/20 bg-primary/5 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
          >
            View all on GitHub
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ repo, index }: { repo: Repo; index: number }) => {
  const card = useScrollReveal<HTMLAnchorElement>({ variant: "fade-up", delay: index * 100 });
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <a
      ref={(el) => {
        (card.ref as React.MutableRefObject<HTMLAnchorElement | null>).current = el;
        (cardRef as React.MutableRefObject<HTMLAnchorElement | null>).current = el;
      }}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 sm:p-7 rounded-2xl bg-background border border-border transition-all duration-300 hover:border-primary/30 relative overflow-hidden"
      style={{
        ...card.style,
        boxShadow: 'var(--shadow-card)',
        transform: `${card.style.transform || ''} perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`.trim(),
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05), transparent, hsl(var(--accent) / 0.05))' }} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
          </div>
          <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </div>

        <h3 className="font-heading font-semibold text-foreground text-base sm:text-lg group-hover:text-primary transition-colors duration-300 break-words">
          {repo.name.replace(/-/g, " ")}
        </h3>

        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
          {repo.description || "No description available"}
        </p>

        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border/50">
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${languageColor[repo.language] || "bg-muted-foreground"}`} />
              <span className="text-xs text-muted-foreground">{repo.language}</span>
            </div>
          )}
          {repo.stargazers_count > 0 && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {repo.stargazers_count}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectsSection;
