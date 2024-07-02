import { Tags } from "./Tags";

export interface ProjectCardModel {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLink: string;
    pictures: string[];
    tags: Tags[];
}