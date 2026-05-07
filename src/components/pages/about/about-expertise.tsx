const expertise = [
  {
    category: "Frontend",
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Real-time Charts"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Redis", "GraphQL / REST"],
  },
  {
    category: "Industrial IoT",
    items: ["MQTT / OPC-UA", "Modbus TCP", "PLC Integration", "Edge Computing"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Linux", "Git", "CI/CD Pipelines"],
  },
];

export function AboutExpertise() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-12 uppercase tracking-wider">
          Expertise
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {expertise.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <span className="block h-1.5 w-1.5 rounded-full bg-foreground/30" />
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
