import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/commons/theme-toggle";

const projects = [
    {
        title: "Manufacturing Dashboard",
        description: "Realtime machine monitoring with MQTT & Laravel",
        href: "/projects/manufacturing-dashboard",
        category: "Industrial",
        tech: ["Laravel", "Livewire", "MQTT"],
    },
    {
        title: "Next.js Portfolio",
        description: "Personal portfolio with modern UI and animations",
        href: "/projects/next-portfolio",
        category: "Software",
        tech: ["Next.js", "Tailwind", "shadcn/ui"],
    },
    {
        title: "PET Recycling System",
        description: "Production & automation documentation hub",
        href: "/projects/pet-recycling",
        category: "Industrial",
        tech: ["Automation", "Manufacturing", "Data"],
    },
];

export default function ProjectHub() {
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
                    <div className="flex gap-3">
                        <Button variant="default" size="sm">All</Button>
                        <Button variant="outline" size="sm">Software</Button>
                        <Button variant="outline" size="sm">Industrial</Button>
                    </div>


                    <div className="flex w-full items-center gap-2 sm:w-auto">
                        <div className="w-full sm:w-64">
                            <Input placeholder="Search project..." className="w-full" />
                        </div>


                        <ThemeToggle />
                    </div>
                </nav>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Link key={project.title} href={project.href} className="group">
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
                                        {project.tech.map((t) => (
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
