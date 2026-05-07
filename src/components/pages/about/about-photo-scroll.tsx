"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

const photos = [
  {
    src: "/images/1.jpg",
    caption: "Factory floor monitoring",
    location: "Cikarang, 2023",
  },
  {
    src: "/images/2.jpg",
    caption: "PLC wiring & integration",
    location: "Bekasi, 2023",
  },
  {
    src: "/images/3.jpg",
    caption: "Dashboard deployment",
    location: "Jakarta, 2024",
  },
  {
    src: "/images/4.jpg",
    caption: "MES system handover",
    location: "Karawang, 2024",
  },
  {
    src: "/images/photo-scroll.png",
    caption: "On-site debugging",
    location: "Tangerang, 2024",
  },
];

export function AboutPhotoScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-24 md:py-32 border-t border-border overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              On the Field
            </h2>
            <p className="text-sm text-muted-foreground/70 mt-2 max-w-sm leading-relaxed">
              Snapshots from factory floors, control rooms, and deployment
              sites across Indonesia.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-muted-foreground/50 shrink-0">
            <MoveHorizontal className="h-4 w-4" />
            <span className="text-xs font-mono">drag to explore</span>
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto px-6 pb-4 select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Spacer for left alignment with content */}
        <div className="shrink-0 w-[calc((100vw-48rem)/2)] hidden lg:block" />

        {photos.map((photo, i) => (
          <div
            key={i}
            className="group shrink-0 relative overflow-hidden rounded-sm"
            style={{ width: "clamp(280px, 40vw, 420px)" }}
          >
            {/* Photo */}
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                draggable={false}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 80vw, 420px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            </div>

            {/* Caption */}
            <div className="mt-3 flex items-start gap-3">
              <span className="text-xs font-mono text-muted-foreground/40 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="space-y-0.5">
                <p className="text-sm font-medium">{photo.caption}</p>
                <p className="text-xs text-muted-foreground">{photo.location}</p>
              </div>
            </div>
          </div>
        ))}

        {/* End spacer */}
        <div className="shrink-0 w-6" />
      </div>

      {/* Progress indicator */}
      <div className="max-w-3xl mx-auto px-6 mt-6">
        <ScrollProgress scrollRef={scrollRef} total={photos.length} />
      </div>
    </section>
  );
}

function ScrollProgress({
  scrollRef,
  total,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  total: number;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const pct = max > 0 ? el.scrollLeft / max : 0;
      setProgress(Math.min(1, Math.max(0, pct)));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-border relative overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 bg-foreground/30 transition-all duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <span className="text-xs font-mono text-muted-foreground/50">
        {Math.round(progress * (total - 1)) + 1} / {total}
      </span>
    </div>
  );
}
