"use client";

import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/honey-yuzu/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/HoneyYuzu",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://instagram.com/officialhoneyyuzu/",
    icon: Instagram,
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-[#050816]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & branding */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="Honey Yuzu Logo"
              className="w-7 h-7"
            />
            <div>
              <span className="font-semibold text-foreground text-sm block">
                Honey Yuzu
              </span>
              <span className="text-xs text-muted-foreground">
                AR, VR & MR Solutions
              </span>
            </div>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-border/30">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Honey Yuzu Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
