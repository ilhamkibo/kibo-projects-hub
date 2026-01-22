"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/commons/theme-toggle";
import { useProjects } from "@/hooks/useProject";

export default function ProjectHub() {
    const {
        projects,
        setKeyword,
        setCategoryId,
        categories,
        categoryId
    } = useProjects();

    return (
        <section className="min-h-screen px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <header className="mb-10 flex flex-col gap-3">
                    <h1 className="text-4xl font-bold tracking-tight">Ilham Prima's Project Hub</h1>
                    <p className="text-muted-foreground max-w-xl">
                        Kumpulan project software dan industrial system yang pernah saya kerjakan.
                    </p>
                </header>
                <nav className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-2">
                        <Button
                            size="sm"
                            className="transition-colors duration-200"
                            variant={categoryId === null ? "default" : "outline"}
                            onClick={() => setCategoryId(null)}
                        >
                            All
                        </Button>

                        {categories.map(cat => (
                            <Button
                                key={cat.id}
                                className="transition-colors duration-200"
                                size="sm"
                                variant={categoryId === cat.id ? "default" : "outline"}
                                onClick={() => setCategoryId(cat.id)}
                            >
                                {cat.name}
                            </Button>
                        ))}
                    </div>



                    <div className="flex items-center gap-2">
                        <Input placeholder="Search project..." onChange={e => setKeyword(e.target.value)} />
                        <ThemeToggle />
                    </div>
                </nav>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Link key={project.title} href={project.project_url} className="group">
                            <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-lg">{project.title}</CardTitle>
                                        <Badge variant="secondary">{project.category}</Badge>
                                    </div>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologyNames.map(t => (
                                            <Badge key={t} variant="outline">{t}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}



