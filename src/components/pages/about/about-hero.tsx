"use client";

import Image from "next/image";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "4+", icon: Calendar },
  { label: "Projects Shipped", value: "20+", icon: Briefcase },
  { label: "Based In", value: "Bekasi, ID", icon: MapPin },
];

export function AboutHero() {
  return (
    <section className="min-h-[85dvh] flex flex-col justify-center pt-14">
      <div className="max-w-3xl mx-auto px-6 w-full">
        {/* Photo + Name row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-start">
          {/* Photo with frame */}
          <div className="shrink-0 flex md:block justify-center w-full md:w-auto">
            <div className="relative group">
              {/* Decorative frame behind */}
              <div className="absolute -inset-3 border border-border rounded-sm translate-x-2 translate-y-2 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
              {/* Decorative accent line */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-foreground/20 rounded-tl-sm" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-foreground/20 rounded-br-sm" />

              <div className="relative w-36 h-44 sm:w-44 sm:h-52 md:w-52 md:h-64 overflow-hidden rounded-sm bg-muted">
                <Image
                  src="/images/photo-hero.jpg"
                  alt="Ilham Prima Y"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                  priority
                />
              </div>

              {/* Small label under photo */}
              <div className="mt-3 flex items-center gap-2">
                <span className="h-px w-4 bg-foreground/30" />
                <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
                  Bekasi, 2024
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6 pt-1">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              About Me
            </p>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tighter leading-[1.05]">
                Ilham Prima Y
              </h1>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Software Engineer · Manufacturing Tech
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Building systems that bridge the gap between hardware and
              software. I spend most of my time making factory floors smarter —
              from PLC integration to real-time dashboards that help operators
              make better decisions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                My journey started with curiosity about how machines
                communicate. That curiosity turned into a career building MES
                and IoT pipelines for industrial clients across Indonesia.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Today, I focus on full-stack development with heavy emphasis on
                backend architecture, real-time data processing, and reliable
                system design. I believe great engineering is invisible.
              </p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="flex items-center gap-2 mb-2">
                  <stat.icon className="h-3.5 w-3.5 text-muted-foreground/70" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    {stat.label}
                  </span>
                </div>
                <p className="text-2xl font-semibold tracking-tight">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
