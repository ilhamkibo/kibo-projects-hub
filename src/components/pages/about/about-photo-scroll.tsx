"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function AboutPhotoScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const section = sectionRef.current;
        const inner = innerRef.current;
        if (!section || !inner) return;

        const rect = section.getBoundingClientRect();
        const windowH = window.innerHeight;

        // Progress from 0 (bottom enters viewport) to 1 (top exits viewport)
        const progress = Math.max(
          0,
          Math.min(1, (windowH - rect.top) / (windowH + rect.height))
        );

        const maxTranslate = window.innerWidth > 768 ? 480 : 320;
        const translateX = (1 - progress) * maxTranslate;
        const opacity = Math.min(1, Math.max(0, (progress - 0.1) / 0.4));

        inner.style.transform = `translateX(${translateX}px)`;
        inner.style.opacity = `${opacity}`;

        rafRef.current = 0;
      });
    };

    // Initial call
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 overflow-hidden border-t border-border"
    >
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Snapshot
        </h2>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-6 bg-foreground/20" />
          <span className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
            On the field
          </span>
        </div>
      </div>

      {/* Scroll-tracked photo */}
      <div
        ref={innerRef}
        className="relative w-full overflow-hidden rounded-sm"
        style={{
          minHeight: "clamp(280px, 40vw, 420px)",
          transform: "translateX(0px)",
          opacity: 0,
          willChange: "transform, opacity",
        }}
      >
        <Image
          src="/images/photo-scroll.png"
          alt="On site at a manufacturing facility"
          fill
          className="object-cover"
          priority
        />

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />

        {/* Overlay caption */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <div className="inline-block bg-background/80 backdrop-blur-sm px-4 py-3 rounded-sm border border-border/50">
            <p className="text-sm font-semibold tracking-tight">
              Factory floor, 2024
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Debugging PLC communication on site
            </p>
          </div>
        </div>
      </div>

      {/* Caption row */}
      <div className="max-w-3xl mx-auto px-6 mt-4">
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground/50 font-mono">
            01
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground/60 italic max-w-xs text-right">
            &ldquo;Engineering happens where the machines are.&rdquo;
          </span>
        </div>
      </div>
    </section>
  );
}
