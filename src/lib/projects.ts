import projectsData from "@/data/projects.json";

export type ProjectCategory = "can-ho" | "biet-thu" | "ban-ve";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  area: string;
  year: number;
  location: string;
  style: string;
  thumbnail: string;
  images: string[];
  description: string;
  featured: boolean;
}

export const allProjects: Project[] = projectsData as Project[];

export function getFeaturedProjects(): Project[] {
  return allProjects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return allProjects.filter((p) => p.category === category);
}

export function getRelatedProjects(project: Project, count = 3): Project[] {
  return allProjects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, count);
}

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "Tất Cả",
  "can-ho": "Căn Hộ",
  "biet-thu": "Biệt Thự",
  "ban-ve": "Bản Vẽ",
};
