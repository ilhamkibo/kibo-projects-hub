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
      "Kafka",
      "RabbitMQ",
    ],
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
  },
];

export function AboutStack() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Stack & Expertise
          </h2>
          <p className="text-sm text-muted-foreground/70 mt-2 max-w-md leading-relaxed">
            Technologies I work with daily — categorized for clarity, built for
            industrial-grade production systems.
          </p>
        </div>

        {/* Bento grid: 2×2 on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group relative border border-border hover:border-foreground/20 transition-colors duration-200 rounded-sm p-5 sm:p-6"
            >
              {/* Corner accent */}
              <span className="absolute top-0 right-0 w-6 h-px bg-foreground/10 group-hover:w-8 group-hover:bg-foreground/30 transition-all duration-300" />
              <span className="absolute top-0 right-0 w-px h-6 bg-foreground/10 group-hover:h-8 group-hover:bg-foreground/30 transition-all duration-300" />

              {/* Category name */}
              <h3 className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-4">
                {cat.name}
              </h3>

              {/* Divider */}
              <div className="h-px bg-border mb-4" />

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-200"
                  >
                    <span className="block h-1 w-1 rounded-full bg-foreground/20 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
