"use client";

import { ArrowUpRight, Globe, Car, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Room Takeover",
    category: "Web Platform",
    description:
      "A sophisticated web platform enabling real-time collaborative experiences for interactive room management and event coordination.",
    icon: Globe,
    tech: ["React", "Firebase", "Real-time DB"],
    color: "#3b82f6",
    image: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #1e1b4b 100%)",
  },
  {
    title: "AR MG",
    category: "Automotive AR",
    description:
      "An immersive augmented reality showcase for automotive visualization, allowing users to explore vehicle features in their environment.",
    icon: Car,
    tech: ["Unity", "AR Foundation", "3D Rendering"],
    color: "#7c3aed",
    image: "linear-gradient(135deg, #2e1065 0%, #1e1b4b 50%, #0f172a 100%)",
  },
  {
    title: "AR Christmas Tree",
    category: "Interactive AR",
    description:
      "A magical interactive AR experience bringing holiday decorations to life with gesture controls and dynamic animations.",
    icon: Sparkles,
    tech: ["Unity", "WebXR", "Spatial Audio"],
    color: "#fbbf24",
    image: "linear-gradient(135deg, #422006 0%, #1e1b4b 50%, #0f172a 100%)",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0a0f1f] to-[#050816]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20 mb-6">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">Projects That </span>
            <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
              Inspire
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A selection of our recent work showcasing innovation across web, mobile,
            and augmented reality platforms.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card backdrop-blur-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow: `0 0 0 0 ${project.color}00`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 60px ${project.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 0 ${project.color}00`;
              }}
            >
              {/* Project image/preview area */}
              <div
                className="h-48 relative"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="p-6 rounded-2xl backdrop-blur-sm"
                    style={{ backgroundColor: `${project.color}20` }}
                  >
                    <project.icon
                      className="w-12 h-12"
                      style={{ color: project.color }}
                    />
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
