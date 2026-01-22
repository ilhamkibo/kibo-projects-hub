import data from "@/data/projects.json";

export type Project = (typeof data.projects)[0];

export const projectService = {
    getAll() {
        return data.projects.filter(p => p.status === "published");
    },

    getByCategory(categoryId?: number) {
        if (!categoryId) return this.getAll();
        return this.getAll().filter(p => p.category_id === categoryId);
    },

    search(keyword: string) {
        return this.getAll().filter(p =>
            p.title.toLowerCase().includes(keyword.toLowerCase())
        );
    },

    getCategories() {
        return data.categories;
    },

    getTechnologies() {
        return data.technologies;
    }
};
