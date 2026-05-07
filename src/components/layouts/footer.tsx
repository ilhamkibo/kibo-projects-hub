"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:hello@ilham.dev", label: "Email", icon: Mail },
];

export function Footer() {
  const pathname = usePathname();
  const isWide = pathname === "/projects";
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div
        className={cn(
          "mx-auto px-6 py-12 transition-all duration-300",
          isWide ? "max-w-6xl" : "max-w-3xl"
        )}
      >
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Left — Brand */}
          <div className="space-y-3 max-w-sm">
            <Link
              href="/"
              className="text-sm font-medium tracking-tight hover:opacity-60 transition-opacity"
            >
              Ilham Prima Y
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Software engineer based in Bekasi, building web systems for
              manufacturing and industrial automation.
            </p>
          </div>

          {/* Right — Links & Social */}
          <div className="flex gap-12 sm:gap-16">
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                Navigate
              </p>
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                Connect
              </p>
              <div className="flex flex-col gap-1.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                  >
                    <link.icon className="h-3 w-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            {currentYear} Ilham Ramadhan. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            <ArrowUp className="h-3 w-3" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
