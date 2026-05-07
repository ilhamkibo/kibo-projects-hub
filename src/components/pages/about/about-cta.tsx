import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export function AboutCta() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter leading-tight">
              Let&apos;s build something that lasts.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I&apos;m currently open to full-time roles and consulting
              opportunities in industrial software, IoT systems, and
              manufacturing technology.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:hello@ilham.dev"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm bg-foreground text-background hover:opacity-90 transition-opacity rounded-sm"
            >
              <Mail className="h-3.5 w-3.5" />
              Email me
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm border border-border hover:border-foreground/30 transition-colors rounded-sm"
            >
              View projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
