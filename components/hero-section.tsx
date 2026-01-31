"use client";

import { ArrowRight, Code2, Smartphone, View } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#050816]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#3b82f6]/20 rounded-full blur-[128px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#fbbf24]/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo and brand */}
        {/* <div className="flex items-center justify-center gap-3 mb-8">
          <img src="/logo.png" alt="Honey Yuzu" className="w-12 h-12" />
          <span className="text-2xl font-semibold tracking-tight text-foreground">
            Honey Yuzu
          </span>
        </div> */}

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">Building the </span>
          <span className="bg-linear-to-r from-[#fbbf24] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
            Future
          </span>
          <br />
          <span className="text-foreground">of Digital Experience</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          A private software studio crafting innovative Web, Mobile, and
          Augmented Reality applications for universities and industry partners.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://github.com/HoneyYuzu" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#050816] font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:border-[#7c3aed]/50 text-foreground px-8 py-6 text-lg backdrop-blur-sm hover:bg-[#7c3aed]/10 transition-all duration-300 bg-transparent"
          >
            Get in Touch
          </Button>
        </div>

        {/* Service highlights */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { icon: Code2, label: "Web Development" },
            { icon: Smartphone, label: "Mobile Apps" },
            { icon: View, label: "AR Experiences" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="p-2 rounded-lg bg-secondary/50 group-hover:bg-[#7c3aed]/20 transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
