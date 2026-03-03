"use client";

import { Users, Rocket, Target, Zap } from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We explore modern technologies to build web apps and Unity games that stand out.",
  },
  {
    icon: Target,
    title: "User-Friendly",
    description: "Every product we build is crafted with the end user in mind — clean, intuitive, and accessible.",
  },
  {
    icon: Users,
    title: "Open Collaboration",
    description: "We welcome partners and contributors. Building together creates better products.",
  },
  {
    icon: Zap,
    title: "Scalable Solutions",
    description: "From day one we design for growth — scalable architecture, clean code, impactful results.",
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
              <span className="text-foreground">A Studio with a </span>
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
                Big Mission
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Honey Yuzu Studio was founded by a small team of passionate
                developers with a goal to build high-quality software solutions
                using modern technologies.
              </p>
              <p>
                Our mission is to create user-friendly, scalable, and impactful
                digital solutions while learning and growing as developers. We
                believe in the power of collaboration and open innovation.
              </p>
              <p>
                We&apos;re open to collaboration! If you&apos;re interested in working
                with us, feel free to reach out and let&apos;s build something amazing
                together.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { value: "3", label: "Core Specialties" },
                { value: "∞", label: "Ideas to Build" },
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
