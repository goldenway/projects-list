import { Component } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'pl-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  selectedProject: Project;

  onSwitchProject(project: Project) {
    this.selectedProject = project;
  }
}
