import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    handle: "@ilham-dev",
    href: "https://github.com",
  },
  {
    name: "LinkedIn",
    handle: "Ilham Prima Y",
    href: "https://linkedin.com/in",
  },
  {
    name: "Email",
    handle: "hello@ilham.dev",
    href: "mailto:hello@ilham.dev",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-12 uppercase tracking-wider">
          Connect
        </h2>

        <div className="grid gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between py-4 px-5 border border-border hover:border-foreground/30 transition-colors rounded-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">{link.name}</span>
                <span className="text-sm text-muted-foreground">
                  {link.handle}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground leading-relaxed max-w-md">
          I&apos;m currently open to full-time roles and freelance opportunities.
          Feel free to reach out if you&apos;d like to work together.
        </p>
      </div>
    </section>
  );
}
