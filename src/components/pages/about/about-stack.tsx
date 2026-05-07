"use client";

import { useState } from "react";

const favoriteTools = [
  { name: "TypeScript", label: "TypeScript" },
  { name: "React", label: "React" },
  { name: "Next.js", label: "Next.js" },
  { name: "Node.js", label: "Node.js" },
  { name: "PostgreSQL", label: "PostgreSQL" },
  { name: "Redis", label: "Redis" },
  { name: "Docker", label: "Docker" },
  { name: "Tailwind CSS", label: "Tailwind CSS" },
  { name: "GraphQL", label: "GraphQL" },
  { name: "MQTT", label: "MQTT" },
  { name: "Go", label: "Go" },
  { name: "React Native", label: "React Native" },
];

// Duplicate for seamless looping
const marqueeItems = [...favoriteTools, ...favoriteTools];

export function AboutStack() {
  return (
    <section className="py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Favorite Stack
        </h2>
        <p className="text-sm text-muted-foreground/70 mt-2 max-w-md leading-relaxed">
          Tools and technologies I reach for every day — battle-tested and
          production-proven.
        </p>
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="relative mb-6">
        <Marquee direction="left" duration={40}>
          {marqueeItems.map((item, i) => (
            <span
              key={`row1-${i}`}
              className="inline-flex items-center gap-3 mx-6"
            >
              <span className="text-sm font-semibold tracking-tight whitespace-nowrap text-foreground/80">
                {item.name}
              </span>
              <span className="block h-1 w-1 rounded-full bg-foreground/20" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Marquee row 2 — right to left (slower) */}
      <div className="relative">
        <Marquee direction="right" duration={50}>
          {marqueeItems.map((item, i) => (
            <span
              key={`row2-${i}`}
              className="inline-flex items-center gap-3 mx-6"
            >
              <span className="text-sm font-semibold tracking-tight whitespace-nowrap text-foreground/80">
                {item.name}
              </span>
              <span className="block h-1 w-1 rounded-full bg-foreground/20" />
            </span>
          ))}
        </Marquee>
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
