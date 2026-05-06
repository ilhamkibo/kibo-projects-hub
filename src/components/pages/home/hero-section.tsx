import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center pt-14">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="space-y-10">
          {/* Top — Name & Location */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
              Ilham Ramadhan
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-snug max-w-xl">
              Software engineer based in Bekasi, Indonesia.
            </p>
          </div>

          {/* Main pitch */}
          <p className="text-base sm:text-lg leading-relaxed text-foreground/80 max-w-2xl">
            I build web-based systems for manufacturing. For the past 4+ years, I have been
            working on MES (Manufacturing Execution System), connecting factory machines to
            dashboards, and dealing with industrial protocols so machines can talk to the browser.
          </p>

          {/* Specialization list */}
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
              Mainly work with
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[
                "MES & Production Monitoring",
                "Industrial Protocols (MQTT, OPC-UA, Modbus)",
                "PLC & Machine Integration",
                "Real-time Web Dashboards",
                "IoT Data Collection",
                "Factory Floor → Cloud Pipeline",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 block w-1 h-1 rounded-full bg-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm bg-foreground text-background hover:opacity-90 transition-opacity rounded-sm"
            >
              See projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm border border-border hover:border-foreground/30 transition-colors rounded-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Bottom bar — scroll indicator + stats */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-20 pt-6 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground/60" />
            </span>
            Scroll down
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
            <span>4+ years</span>
            <span className="text-border">/</span>
            <span>Full-stack</span>
            <span className="text-border">/</span>
            <span>Bekasi, ID</span>
          </div>
        </div>
      </div>
    </section>
  );
}
