"use client";

import { Code2, Smartphone, View, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Scalable, performant web applications built with modern frameworks. From complex dashboards to seamless user experiences.",
    features: ["React & Next.js", "Real-time Systems", "Cloud Infrastructure"],
    gradient: "from-[#3b82f6] to-[#1d4ed8]",
    glow: "group-hover:shadow-[0_0_80px_rgba(59,130,246,0.3)]",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional performance and user experience across all devices.",
    features: ["iOS & Android", "Cross-Platform", "Offline-First"],
    gradient: "from-[#7c3aed] to-[#5b21b6]",
    glow: "group-hover:shadow-[0_0_80px_rgba(124,58,237,0.3)]",
  },
  {
    icon: View,
    title: "AR Applications",
    description:
      "Immersive augmented reality experiences that bridge the digital and physical worlds for training, marketing, and entertainment.",
    features: ["Unity & AR Foundation", "WebXR", "Spatial Computing"],
    gradient: "from-[#fbbf24] to-[#d97706]",
    glow: "group-hover:shadow-[0_0_80px_rgba(251,191,36,0.3)]",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest bg-[#7c3aed]/10 text-[#a78bfa] border border-[#7c3aed]/20 mb-6">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">Engineering </span>
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We specialize in three core areas, delivering cutting-edge solutions
            that push the boundaries of what&apos;s possible.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl border border-border/50 bg-card backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${service.glow}`}
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}
              >
                <service.icon className="w-6 h-6 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <div className="flex items-center gap-1 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>

              {/* Hover gradient border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity -z-10`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
