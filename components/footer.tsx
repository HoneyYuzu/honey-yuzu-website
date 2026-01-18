"use client";

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border/50 bg-[#050816]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Honey Yuzu Logo"
          className="w-6 h-6"
        />
        <span className="font-semibold text-foreground text-sm">Honey Yuzu</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Honey Yuzu Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
