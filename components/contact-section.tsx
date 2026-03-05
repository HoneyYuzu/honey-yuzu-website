"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Send, Linkedin, Instagram, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const EMAILJS_SERVICE_ID  = "service_0u9cff3";
const EMAILJS_TEMPLATE_ID = "template_43qaiw8";
const EMAILJS_PUBLIC_KEY  = "kM5CenHwNARPaFCIn";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ from_name: "", from_email: "", message: "" });

  useEffect(() => {
    if (state === "success" || state === "error") {
      const timer = setTimeout(() => setState("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  fields.from_name,
          from_email: fields.from_email,
          message:    fields.message,
          reply_to:   fields.from_email,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setState("success");
      setFields({ from_name: "", from_email: "", message: "" });
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050816]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#fbbf24]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7c3aed]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest bg-[#fbbf24]/10 text-[#fbbf24] border border-[#fbbf24]/20 mb-6">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">Let&apos;s Build </span>
            <span className="bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            We&apos;re open to collaboration! Send us a message or find us on
            social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* ── Contact Form ───────────────────────────────────── */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    name="from_name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={fields.from_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/30 transition-colors text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={fields.from_email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/30 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project or idea..."
                  value={fields.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#fbbf24]/50 focus:ring-1 focus:ring-[#fbbf24]/30 transition-colors text-sm resize-none"
                />
              </div>

              {/* Feedback messages */}
              {state === "success" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Message sent! We&apos;ll get back to you soon.
                </div>
              )}
              {state === "error" && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={state === "sending"}
                className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#050816] font-semibold py-6 text-base group transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {state === "sending" ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-[#050816]/30 border-t-[#050816] animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* ── Side info ──────────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-5 justify-center">
            <a
              href="mailto:honeyyuzuofficial@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-[#fbbf24]/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-[#fbbf24]/10">
                <Mail className="w-5 h-5 text-[#fbbf24]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-sm text-foreground font-medium">honeyyuzuofficial@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/honey-yuzu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-[#0a66c2]/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-[#0a66c2]/10">
                <Linkedin className="w-5 h-5 text-[#0a66c2]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">LinkedIn</p>
                <p className="text-sm text-foreground font-medium">Honey Yuzu</p>
              </div>
            </a>
            <a
              href="https://instagram.com/officialhoneyyuzu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-[#e1306c]/30 transition-all duration-300 group"
            >
              <div className="p-3 rounded-xl bg-[#e1306c]/10">
                <Instagram className="w-5 h-5 text-[#e1306c]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Instagram</p>
                <p className="text-sm text-foreground font-medium">@officialhoneyyuzu</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
