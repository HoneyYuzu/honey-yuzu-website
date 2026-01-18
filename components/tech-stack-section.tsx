"use client";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <path
          fillRule="evenodd"
          d="M12 6c3.79 0 7.17.89 9.59 2.23.6.33 1.13.7 1.6 1.1.47.4.81.83.81 1.17 0 .34-.34.77-.81 1.17-.47.4-1 .77-1.6 1.1C19.17 14.11 15.79 15 12 15s-7.17-.89-9.59-2.23c-.6-.33-1.13-.7-1.6-1.1-.47-.4-.81-.83-.81-1.17 0-.34.34-.77.81-1.17.47-.4 1-.77 1.6-1.1C4.83 6.89 8.21 6 12 6Zm0 1.5c-3.48 0-6.54.82-8.59 1.95-.51.28-.93.57-1.24.84-.31.27-.42.45-.42.49 0 .04.11.22.42.49.31.27.73.56 1.24.84 2.05 1.13 5.11 1.95 8.59 1.95s6.54-.82 8.59-1.95c.51-.28.93-.57 1.24-.84.31-.27.42-.45.42-.49 0-.04-.11-.22-.42-.49-.31-.27-.73-.56-1.24-.84C18.54 8.32 15.48 7.5 12 7.5Z"
          clipRule="evenodd"
        />
        <path d="M7.05 16.77c1.9 3.28 4.5 5.6 6.95 6.73.6.28 1.22.48 1.83.6.61.12 1.15.14 1.61 0 .46-.14.8-.43.97-.84.17-.41.17-.94 0-1.56-.17-.62-.51-1.3-1.02-2.03-.51-.73-1.17-1.5-1.98-2.27l-1.06 1.06c.71.67 1.29 1.35 1.71 1.95.42.6.66 1.09.77 1.48.11.39.08.61-.01.79-.09.18-.29.31-.58.37-.29.06-.68.04-1.14-.06-.46-.1-.98-.28-1.48-.51-1.98-.92-4.17-2.85-5.72-5.54l-1.3.75c.59 1.02 1.27 1.96 2.03 2.82l-.58 1.26Z" />
        <path d="M16.95 16.77c-1.9 3.28-4.5 5.6-6.95 6.73-.6.28-1.22.48-1.83.6-.61.12-1.15.14-1.61 0-.46-.14-.8-.43-.97-.84-.17-.41-.17-.94 0-1.56.17-.62.51-1.3 1.02-2.03.51-.73 1.17-1.5 1.98-2.27l1.06 1.06c-.71.67-1.29 1.35-1.71 1.95-.42.6-.66 1.09-.77 1.48-.11.39-.08.61.01.79.09.18.29.31.58.37.29.06.68.04 1.14-.06.46-.1.98-.28 1.48-.51 1.98-.92 4.17-2.85 5.72-5.54l1.3.75c-.59 1.02-1.27 1.96-2.03 2.82l.58 1.26Z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "Framework",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.5 14.5v-9l7.5 9h-2.25l-5.25-6.3v6.3H8.5Z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="m3.89 15.67 2.27-14.27a.56.56 0 0 1 1.08-.15l2.44 4.54-1.46 2.84-4.33 7.04Zm16.32 3.62-2.67-16.52a.56.56 0 0 0-.99-.25L3.69 19.3l7.38 4.04a1.67 1.67 0 0 0 1.58 0l7.56-4.05Zm-5.56-11.11-1.81-3.44a.56.56 0 0 0-.99 0L4.58 17.3l5.07-8.12Z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M13.36 21.89c-.4.52-1.26.16-1.24-.51l.3-10.58h7.3c1.06 0 1.65 1.21 1 2l-7.36 9.09Zm-2.72-19.78c.4-.52 1.26-.16 1.24.51l-.18 8.58H4.4c-1.06 0-1.65-1.21-1-2l7.24-7.09Z" />
      </svg>
    ),
  },
  {
    name: "Unity",
    category: "AR/VR",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="m18.48 16.2-2.71-4.7 2.71-4.7 1.76 4.7-1.76 4.7Zm-5.84-6.1L15.35 5l4.36.76-3.56 3.58-3.51.76Zm0 2.8 3.51.76 3.56 3.58-4.36.76-2.71-5.1ZM4.29 12l6.13-10.6 2.23 4.5L8.86 12l3.79 6.1-2.23 4.5L4.29 12Z" />
      </svg>
    ),
  },
  {
    name: "AR Foundation",
    category: "AR/VR",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2 2 7l10 5 10-5-10-5Zm0 15-10-5v5l10 5 10-5v-5l-10 5Z" />
      </svg>
    ),
  },
  {
    name: "WebXR",
    category: "AR/VR",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm5 12v2h8v-2H8Zm-2 4v-2h12v2H6Z" />
        <circle cx="8" cy="10" r="2" />
        <circle cx="16" cy="10" r="2" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm12.52 8.26v1.3h-2.65v6.44H9.82v-6.44H7.17v-1.3h7.35Zm.88 2.14c0-.53.17-.94.52-1.25.35-.31.84-.46 1.48-.46.61 0 1.1.15 1.45.45.36.3.53.7.53 1.21v3.84c0 .14.04.25.12.32.08.08.19.11.34.11h.16v1.38h-.75c-.42 0-.75-.11-.99-.33a1.1 1.1 0 0 1-.36-.87c-.18.37-.44.67-.78.9-.34.22-.75.33-1.22.33-.55 0-1-.16-1.35-.48-.35-.32-.53-.73-.53-1.23 0-.56.2-.99.6-1.3.4-.3.97-.49 1.7-.56l1.32-.13v-.43c0-.27-.08-.48-.23-.62-.16-.15-.38-.22-.66-.22-.25 0-.46.06-.62.2-.16.12-.24.3-.24.53l-1.7.01Zm2 1.9-.8.08c-.34.04-.6.12-.78.24-.19.12-.28.29-.28.51 0 .2.07.37.22.49.14.13.34.19.58.19.34 0 .62-.11.84-.32.22-.22.33-.5.33-.86v-.33h-.11Z" />
      </svg>
    ),
  },
];

export function TechStackSection() {
  return (
    <section id="tech" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/20 mb-6">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">Powered by </span>
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
              Modern Tech
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We leverage cutting-edge technologies to build scalable, performant,
            and future-proof applications.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl transition-all duration-300 hover:bg-card hover:border-[#3b82f6]/30 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="text-muted-foreground group-hover:text-[#60a5fa] transition-colors">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Vercel", "Git", "Figma"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full text-sm font-medium bg-secondary/50 text-muted-foreground border border-border/50 hover:text-foreground hover:border-border transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
