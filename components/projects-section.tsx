"use client";

import { ArrowUpRight, Home, Car, TreePine, Navigation, Building2, Activity, Play } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  tech: string[];
  color: string;
  image: string;
  status: "Completed" | "In Progress";
  liveUrl?: string;
  videoUrl?: string;
};

const webProjects: Project[] = [
  {
    title: "Room Takeover",
    category: "Web Application",
    description:
      "A room finder platform for students near ABAC University. Browse available listings, filter by price and location, and connect with landlords — powered by Supabase.",
    icon: Home,
    tech: ["Next.js", "React", "Supabase", "TailwindCSS"],
    color: "#3b82f6",
    image: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #1e1b4b 100%)",
    status: "Completed",
    liveUrl: "https://roomfinder-abac.vercel.app/",
  },
];

const arProjects: Project[] = [
  {
    title: "AR MG",
    category: "Automotive AR",
    description:
      "An immersive augmented reality showcase for automotive visualization, letting users explore MG vehicle features overlaid in their real environment.",
    icon: Car,
    tech: ["Unity", "AR Foundation", "C#", "3D Rendering"],
    color: "#7c3aed",
    image: "linear-gradient(135deg, #2e1065 0%, #1e1b4b 50%, #0f172a 100%)",
    status: "Completed",
    videoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7419034795587973121",
  },
  {
    title: "AR Christmas",
    category: "Interactive AR",
    description:
      "A festive interactive AR experience bringing holiday decorations to life with gesture controls, dynamic animations, and spatial audio.",
    icon: TreePine,
    tech: ["Unity", "AR Foundation", "C#"],
    color: "#10b981",
    image: "linear-gradient(135deg, #064e3b 0%, #1e1b4b 50%, #0f172a 100%)",
    status: "Completed",
    videoUrl: "https://www.instagram.com/reel/DStZgYwj1YY/?igsh=MXZya2NkYnVnYnp2eg%3D%3D",
  },
  {
    title: "AR NAV",
    category: "AR Navigation",
    description:
      "An augmented reality navigation app that overlays directional waypoints and points of interest onto the live camera view to guide users.",
    icon: Navigation,
    tech: ["Unity", "AR Foundation", "C#", "GPS"],
    color: "#f59e0b",
    image: "linear-gradient(135deg, #451a03 0%, #1e1b4b 50%, #0f172a 100%)",
    status: "Completed",
    videoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7427169519195930624",
  },
];

const futureProjects: Project[] = [
  {
    title: "VMES Tour",
    category: "Campus AR Tour",
    description:
      "An augmented reality campus tour experience for VMES, guiding visitors through key locations with interactive AR markers and information overlays.",
    icon: Building2,
    tech: ["Unity", "AR Foundation", "C#"],
    color: "#ec4899",
    image: "linear-gradient(135deg, #500724 0%, #1e1b4b 50%, #0f172a 100%)",
    status: "In Progress",
  },
  {
    title: "MediaPipe Pose AR",
    category: "AR (Android)",
    description:
      "An AR application using MediaPipe for real-time human pose estimation, overlaying body landmark visualizations onto the live camera view.",
    icon: Activity,
    tech: ["Unity", "AR Foundation", "MediaPipe", "C#"],
    color: "#6366f1",
    image: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #1e3a5f 100%)",
    status: "In Progress",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
      style={{ boxShadow: `0 0 0 0 ${project.color}00` }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 60px ${project.color}30`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 0 ${project.color}00`;
      }}
    >
      {/* Preview area */}
      <div className="h-44 relative shrink-0" style={{ background: project.image }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="p-5 rounded-2xl backdrop-blur-sm"
            style={{ backgroundColor: `${project.color}20` }}
          >
            <project.icon className="w-10 h-10" style={{ color: project.color }} />
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md"
            style={{ backgroundColor: `${project.color}20`, color: project.color }}
          >
            {project.category}
          </span>
        </div>
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
              project.status === "Completed"
                ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                : "bg-amber-500/20 border-amber-500/30 text-amber-400"
            }`}
          >
            {project.status === "In Progress" ? "🔧 In Progress" : "✓ Completed"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="mt-4 flex items-center gap-4 flex-wrap">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors group/link"
              style={{ color: project.color }}
            >
              <span>View Live Demo</span>
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-lg border group/vid"
              style={{
                color: project.color,
                borderColor: `${project.color}40`,
                backgroundColor: `${project.color}10`,
              }}
            >
              <Play className="w-3.5 h-3.5 fill-current group-hover/vid:scale-110 transition-transform" />
              <span>Watch Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20 mb-6">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">Projects We&apos;ve </span>
            <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Real projects shipped by Honey Yuzu — from live web platforms to
            immersive AR experiences built with Unity.
          </p>
        </div>

        {/* Web Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#3b82f6]">
              Web
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#3b82f6]/30 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* AR Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
              AR &amp; Mobile
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#7c3aed]/30 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {arProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Future / In-Progress Projects */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#fbbf24]">
              Coming Soon
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#fbbf24]/30 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
