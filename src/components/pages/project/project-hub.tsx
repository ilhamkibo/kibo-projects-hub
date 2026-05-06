"use client";

import { ArrowUpRight, Search, FolderGit2, Layers, Wrench, MapPin } from "lucide-react";
import { useProjects } from "@/hooks/useProject";
import rawData from "@/data/projects.json";

export default function ProjectHub() {
  const { projects, setKeyword, setCategoryId, categories, categoryId } =
    useProjects();

  const stats = [
    {
      label: "Projects",
      value: rawData.projects.filter((p) => p.status === "published").length,
      icon: FolderGit2,
    },
    {
      label: "Categories",
      value: rawData.categories.length,
      icon: Layers,
    },
    {
      label: "Technologies",
      value: rawData.technologies.length,
      icon: Wrench,
    },
    {
      label: "Based in",
      value: "Bekasi",
      icon: MapPin,
    },
  ];

  return (
    <section className="pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Projects
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
            A collection of software and industrial projects I have worked on.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 pb-10 border-b border-border">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 p-4 border border-border rounded-sm hover:border-foreground/20 transition-colors"
            >
              <stat.icon className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold tabular-nums">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-1">
            <button
              onClick={() => setCategoryId(null)}
              className={`px-3 py-1.5 text-sm transition-colors rounded-sm ${
                categoryId === null
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryId(cat.id)}
                className={`px-3 py-1.5 text-sm transition-colors rounded-sm ${
                  categoryId === cat.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-52">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              placeholder="Search project..."
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-sm border border-border rounded-sm bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors"
            />
          </div>
        </div>

        {/* Project Grid */}
        {projects.length === 0 ? (
          <p className="text-sm text-muted-foreground py-12 text-center">
            No projects found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.project_url}
                target={project.open_in_new_tab ? "_blank" : undefined}
                rel={
                  project.open_in_new_tab ? "noopener noreferrer" : undefined
                }
                className="group flex flex-col p-5 border border-border rounded-sm hover:border-foreground/25 hover:bg-muted/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h2 className="font-semibold leading-snug group-hover:underline decoration-1 underline-offset-4">
                    {project.title}
                  </h2>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.short_description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-3 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologyNames.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 bg-secondary text-secondary-foreground rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono">
                    {project.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
