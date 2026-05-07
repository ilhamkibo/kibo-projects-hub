"use client";

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
        <div className="space-y-8">
          {/* Label */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            About Me
          </p>

          {/* Main headline */}
          <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1]">
              Building systems that bridge the gap between hardware and
              software.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I&apos;m Ilham Prima Y, a software engineer obsessed with
              manufacturing technology. I spend most of my time making factory
              floors smarter — from PLC integration to real-time dashboards that
              help operators make better decisions.
            </p>
          </div>

          {/* Description block */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              My journey started with curiosity about how machines communicate.
              That curiosity turned into a career building MES (Manufacturing
              Execution Systems) and IoT pipelines for industrial clients across
              Indonesia.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Today, I focus on full-stack development with heavy emphasis on
              backend architecture, real-time data processing, and reliable
              system design. I believe great engineering is invisible — it just
              works.
            </p>
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
