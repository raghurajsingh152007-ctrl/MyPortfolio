import { useEffect, useState } from "react";
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

const ProjectsSection = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const heading = useScrollReveal({ variant: "fade-up" });

  useEffect(() => {
    fetch("https://api.github.com/users/raghurajsingh152007-ctrl/repos?sort=updated&per_page=6")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 6));
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const languageColor: Record<string, string> = {
    HTML: "bg-orange-400",
    CSS: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-600",
    Python: "bg-green-500",
    "C++": "bg-pink-500",
    C: "bg-gray-500",
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={heading.ref} style={heading.style}>
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Projects</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Recent work
          </h2>
        </div>

        {loading ? (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 rounded-2xl bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} languageColor={languageColor} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ repo, index, languageColor }: { repo: Repo; index: number; languageColor: Record<string, string> }) => {
  const variants = ["scale-up", "fade-up", "zoom-in", "fade-left", "fade-right", "blur-in"] as const;
  const card = useScrollReveal<HTMLAnchorElement>({ variant: variants[index % variants.length], delay: index * 100 });

  return (
    <a
      ref={card.ref}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-lift group block p-6 rounded-2xl bg-background border border-border transition-all duration-300 hover:border-primary/30"
      style={{ ...card.style, boxShadow: 'var(--shadow-card)' }}
    >
      <div className="flex items-start justify-between">
        <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
        <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </div>

      <h3 className="font-heading font-semibold text-foreground mt-4 text-base group-hover:text-primary transition-colors duration-300">
        {repo.name.replace(/-/g, " ")}
      </h3>

      <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
        {repo.description || "No description available"}
      </p>

      <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
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
    </a>
  );
};

export default ProjectsSection;
