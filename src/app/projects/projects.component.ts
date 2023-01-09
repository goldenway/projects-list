import { Component } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'pl-projects',
  templateUrl: './projects.component.html',
  providers: [ProjectService]
})
export class ProjectsComponent {
  selectedProject: Project;

  onSwitchProject(project: Project) {
    this.selectedProject = project;
  }
}
