"use client";

import { useEffect, useMemo, useState } from "react";
import data from "@/data/projects.json";

export type ProjectRaw = (typeof data.projects)[0];

export type ProjectView = ProjectRaw & {
    category: string;
    technologyNames: string[];
};

export function useProjects() {
    const [keyword, setKeyword] = useState("");
    const [categoryId, setCategoryId] = useState<number | null>(null);

    const projects = useMemo<ProjectView[]>(() => {
        return data.projects
            .filter(p => p.status === "published")
            .filter(p => !categoryId || p.category_id === categoryId)
            .filter(p =>
                p.title.toLowerCase().includes(keyword.toLowerCase())
            )
            .map(p => {
                const category = data.categories.find(c => c.id === p.category_id);

                const techNames = p.technologies.map(id => {
                    return data.technologies.find(t => t.id === id)?.name ?? "Unknown";
                });

                return {
                    ...p,
                    category: category?.name ?? "Unknown",
                    technologyNames: techNames,
                };
            });
    }, [keyword, categoryId]);

    return {
        projects,
        setKeyword,
        setCategoryId,
        categoryId,
        categories: data.categories,
    };
}
