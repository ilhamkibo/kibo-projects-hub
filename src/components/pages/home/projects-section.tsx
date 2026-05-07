"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projectsData from "@/data/projects.json";

const technologyMap: Record<number, string> = {};
projectsData.technologies.forEach((tech) => {
  technologyMap[tech.id] = tech.name;
});

const categoryMap: Record<number, string> = {};
projectsData.categories.forEach((cat) => {
  categoryMap[cat.id] = cat.name;
});

export function ProjectsSection() {
  const publishedProjects = projectsData.projects.filter(
    (p) => p.status === "published"
  );

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all →
          </Link>
        </div>

        <div>
          {publishedProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.project_url}
              target={project.open_in_new_tab ? "_blank" : undefined}
              rel={project.open_in_new_tab ? "noopener noreferrer" : undefined}
              className={`group relative block py-6 sm:py-7 ${index !== publishedProjects.length - 1
                ? "border-b border-border"
                : ""
                } hover:bg-muted/30 -mx-6 px-6 transition-colors duration-200`}
            >
              {/* Left accent line on hover */}
              <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-foreground/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />

              <div className="grid sm:grid-cols-[1fr_2fr] gap-1 sm:gap-6">
                <div className="text-sm text-muted-foreground font-mono">
                  {categoryMap[project.category_id]}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold group-hover:underline decoration-1 underline-offset-4">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-xs text-muted-foreground/70">
                    {project.technologies.map((techId, i) => {
                      const techName = technologyMap[techId];
                      if (!techName) return null;
                      return (
                        <span key={techId} className="flex items-center gap-2">
                          {i > 0 && (
                            <span className="text-muted-foreground/30">•</span>
                          )}
                          {techName}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
