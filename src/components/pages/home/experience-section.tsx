const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Company",
    period: "Jan 2024 — Present",
    description:
      "Leading development of microservices architecture and mentoring junior engineers. Working on scalable web applications serving 50k+ daily users.",
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency",
    period: "Mar 2022 — Dec 2023",
    description:
      "Built and maintained client-facing web applications using Next.js and Laravel. Improved Lighthouse scores from 60 to 95+ across all projects.",
  },
  {
    role: "Junior Developer",
    company: "Startup Studio",
    period: "Jun 2021 — Feb 2022",
    description:
      "Built internal automation tools and contributed to open-source projects. Developed RESTful APIs for internal applications.",
  },
];

export function ExperienceSection() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-12 uppercase tracking-wider">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid sm:grid-cols-[1fr_2fr] gap-1 sm:gap-6">
              <div className="text-sm text-muted-foreground font-mono">
                {exp.period}
              </div>
              <div className="space-y-2">
                <div>
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
