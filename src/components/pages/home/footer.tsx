"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();
  const isWide = pathname === "/projects";

  return (
    <footer className="border-t border-border">
      <div
        className={cn(
          "mx-auto px-6 py-8 transition-all duration-300",
          isWide ? "max-w-6xl" : "max-w-3xl"
        )}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p> Ilham Ramadhan.</p>
          <p>Built with Next.js & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
