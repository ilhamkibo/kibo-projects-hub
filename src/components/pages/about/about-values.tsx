import { Zap, Shield, Eye } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Every millisecond matters. I write code that scales and systems that stay responsive under real industrial load.",
  },
  {
    icon: Shield,
    title: "Reliability Over Hype",
    description:
      "Factory floors don't tolerate downtime. I choose battle-tested tools and design for failure, not just success.",
  },
  {
    icon: Eye,
    title: "Invisible Engineering",
    description:
      "The best systems are the ones users never have to think about. I strive for clarity, simplicity, and zero friction.",
  },
];

export function AboutValues() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-12 uppercase tracking-wider">
          Principles
        </h2>

        <div className="grid gap-4">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative flex gap-5 py-5 px-5 -mx-5 sm:mx-0 sm:px-5 sm:rounded-sm border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-200"
            >
              {/* Number */}
              <span className="text-xs font-mono text-muted-foreground/60 mt-0.5">
                0{index + 1}
              </span>

              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <value.icon className="h-4 w-4 text-muted-foreground/70" />
                  <h3 className="font-semibold">{value.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
