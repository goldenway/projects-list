import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Project } from "./project.model";
import { ProjectsService } from "./projects.service";

@Injectable({
    providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<Project[]> {
    constructor(private projectsService: ProjectsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Project[] | Observable<Project[]> | Promise<Project[]> {
        const projects = this.projectsService.getProjects();
        if (projects.length === 0) {
            return this.projectsService.fetchProjects();
        } else {
            return projects;
        }
    }
}
