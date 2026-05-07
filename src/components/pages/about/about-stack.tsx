"use client";

import { useState } from "react";

const categories = [
  {
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Real-time Charts",
      "React Native",
    ],
    direction: "left" as const,
    duration: 35,
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "PostgreSQL",
      "Redis",
      "GraphQL / REST",
      "Go",
      "WebSocket",
    ],
    direction: "right" as const,
    duration: 42,
  },
  {
    name: "Industrial IoT",
    items: [
      "MQTT / OPC-UA",
      "Modbus TCP",
      "PLC Integration",
      "Edge Computing",
      "Time-series DB",
    ],
    direction: "left" as const,
    duration: 38,
  },
  {
    name: "DevOps & Tools",
    items: [
      "Docker",
      "Linux",
      "Git",
      "CI/CD Pipelines",
      "Nginx",
      "Prometheus",
    ],
    direction: "right" as const,
    duration: 46,
  },
];

export function AboutStack() {
  return (
    <section className="py-24 md:py-32 border-t border-border overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 mb-14">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Stack & Expertise
        </h2>
        <p className="text-sm text-muted-foreground/70 mt-2 max-w-md leading-relaxed">
          Technologies I work with daily — categorized by domain and built for
          industrial-grade production systems.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="space-y-8">
        {categories.map((cat, i) => (
          <div key={cat.name}>
            {/* Category label */}
            <div className="max-w-3xl mx-auto px-6 mb-3 flex items-center gap-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                {cat.name}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            {/* Marquee */}
            <Marquee
              direction={cat.direction}
              duration={cat.duration}
            >
              {[...cat.items, ...cat.items, ...cat.items].map((item, j) => (
                <span
                  key={`${i}-${j}`}
                  className="inline-flex items-center gap-3 mx-5"
                >
                  <span className="text-sm font-semibold tracking-tight whitespace-nowrap text-foreground/80">
                    {item}
                  </span>
                  <span className="block h-1 w-1 rounded-full bg-foreground/20" />
                </span>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee({
  children,
  direction,
  duration,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
  duration: number;
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className="flex"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {children}
      </div>
    </div>
  );
}
