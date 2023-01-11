import { Technology } from "../shared/technology.model";

export class Project {
    public name: string;
    public description: string;
    public imagePath: string;
    public technologies: Technology[];

    constructor(name: string, description: string, imagePath: string, technologies: Technology[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.technologies = technologies;
    }
}
