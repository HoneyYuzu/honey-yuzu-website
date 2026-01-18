"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#fbbf24]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7c3aed]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20 mb-6">
          Get in Touch
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">Ready to Build </span>
          <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
            Something Great?
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 text-pretty">
          Whether you have a project in mind or want to explore how we can help,
          we&apos;d love to hear from you.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-[#fbbf24] hover:bg-[#f59e0b] text-[#050816] font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)]"
          >
            Start a Conversation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:border-[#7c3aed]/50 text-foreground px-8 py-6 text-lg backdrop-blur-sm hover:bg-[#7c3aed]/10 transition-all duration-300 bg-transparent"
          >
            View Case Studies
          </Button>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>hello@honeyyuzu.dev</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Available Worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
