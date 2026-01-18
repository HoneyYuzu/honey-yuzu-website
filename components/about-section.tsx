"use client";

import { Users, Rocket, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We push boundaries and explore emerging technologies to deliver solutions that set you apart.",
  },
  {
    icon: Target,
    title: "Focused Delivery",
    description: "Small team, big impact. We maintain agility and precision throughout every project.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work closely with universities and industry partners to co-create meaningful solutions.",
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description: "Engineering-driven development with a commitment to quality, performance, and scalability.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0a0f1f] to-[#050816]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#7c3aed]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest bg-[#7c3aed]/10 text-[#a78bfa] border border-[#7c3aed]/20 mb-6">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              <span className="text-foreground">A Small Studio with </span>
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
                Big Vision
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Honey Yuzu is a private software studio founded with a mission to bridge
                the gap between cutting-edge research and real-world applications.
              </p>
              <p>
                We&apos;re a small, agile team of engineers and designers who thrive on
                challenging projects. Our project-based approach means we bring focused
                expertise to every engagement, whether it&apos;s building a complex web platform
                or pioneering new AR experiences.
              </p>
              <p>
                Our collaborations with universities and industry partners have given us
                unique insight into emerging technologies and how to apply them
                meaningfully.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "15+", label: "Projects Delivered" },
                { value: "5+", label: "Research Partners" },
                { value: "3", label: "Core Specialties" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Values */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl hover:bg-card hover:border-[#7c3aed]/30 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-[#7c3aed]/10 w-fit mb-4">
                  <value.icon className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
