"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative overflow-hidden"
        >
            <Sun
                className={`h-5 w-5 transition-all duration-500 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
                    }`}
            />
            <Moon
                className={`absolute h-5 w-5 transition-all duration-500 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                    }`}
            />
        </Button>
    );
}
