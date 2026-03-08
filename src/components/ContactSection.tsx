import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

const ContactSection = () => {
  const heading = useScrollReveal({ variant: "fade-up" });
  const card = useScrollReveal({ variant: "scale-up", delay: 150 });
  const socials = useScrollReveal({ variant: "fade-up", delay: 300 });

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)' }} />

      <div className="section-container relative">
        <div ref={heading.ref} style={heading.style} className="text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.2em]">Contact</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Let's Build Something<br className="hidden sm:block" /> Amazing Together
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Feel free to reach out for collaboration, opportunities, or just a friendly chat about technology.
          </p>
          <div className="w-12 h-1 rounded-full bg-primary mx-auto mt-4" />
        </div>

        <div className="max-w-xl mx-auto">
          <div ref={card.ref} style={{ ...card.style, boxShadow: 'var(--shadow-card)' }} className="p-7 sm:p-10 rounded-3xl bg-card border border-border relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            <div className="relative space-y-6">
              {/* Phone */}
              <ContactItem
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                label="Phone"
                value="+91 9817679706"
                href="tel:+919817679706"
              />

              {/* Email */}
              <ContactItem
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                label="Email"
                value="raghurajsingh152007@gmail.com"
                href="mailto:raghurajsingh152007@gmail.com"
              />

              <div className="border-t border-border pt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919817679706"
                  className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-[0.98] glow-button"
                  style={{ boxShadow: 'var(--shadow-button)' }}
                >
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:animate-phone-ring" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Me
                </a>
                <a
                  href="mailto:raghurajsingh152007@gmail.com"
                  className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-background text-foreground font-medium text-sm border border-border transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 active:scale-[0.98]"
                >
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </div>

          {/* Social row */}
          <div ref={socials.ref} style={socials.style} className="flex justify-center gap-3 mt-10">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/raghuraj-singh-rathore-98ab0737a/", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { label: "GitHub", href: "https://github.com/Raghu-here", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
              { label: "Instagram", href: "https://www.instagram.com/raghu_15007/", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-card border border-border text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
      <a href={href} className="text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors break-all">
        {value}
      </a>
    </div>
  </div>
);

export default ContactSection;
