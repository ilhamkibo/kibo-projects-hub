const milestones = [
  {
    year: "2024",
    title: "Senior Software Engineer",
    org: "Industrial Tech Corp",
    description:
      "Leading MES product development. Architecting microservices for factory-wide production monitoring and machine integration.",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    org: "Digital Manufacturing Solutions",
    description:
      "Built real-time dashboards and IoT data pipelines. Integrated OPC-UA and MQTT protocols for machine-to-cloud communication.",
  },
  {
    year: "2021",
    title: "Junior Developer",
    org: "Automation Startup",
    description:
      "Developed internal tools for production tracking. First exposure to PLCs, SCADA systems, and industrial automation.",
  },
  {
    year: "2020",
    title: "Computer Science Graduate",
    org: "Universitas Indonesia",
    description:
      "Thesis on real-time data visualization for manufacturing. Graduated with honors and a strong foundation in systems programming.",
  },
];

export function AboutJourney() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-12 uppercase tracking-wider">
          Journey
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1.75 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="group relative grid sm:grid-cols-[100px_1fr] gap-4 sm:gap-6"
              >
                {/* Year dot */}
                <div className="flex items-start gap-3">
                  <span className="hidden sm:flex relative mt-1.5 h-3.5 w-3.5 shrink-0 items-center justify-center">
                    <span className="absolute h-full w-full rounded-full border border-border bg-background group-hover:border-foreground/40 transition-colors" />
                    <span className="relative z-10 h-1.5 w-1.5 rounded-full bg-foreground/60 group-hover:bg-foreground transition-colors" />
                  </span>
                  <span className="text-sm font-mono text-muted-foreground mt-0.5 tabular-nums">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {item.org}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
