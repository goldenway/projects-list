import { Component } from "@angular/core";

import { ProjectsService } from "../projects/projects.service";

@Component({
    selector: 'pl-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;

    constructor(private projectsService: ProjectsService) {}

    onSaveData() {
        this.projectsService.saveProjects();
    }
}
