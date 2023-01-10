import { Component, Input } from '@angular/core';
import { Project } from '../../project.model';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'pl-project-item',
  templateUrl: './project-item.component.html'
})
export class ProjectItemComponent {
  @Input() project: Project;

  constructor(private projectsService: ProjectsService) {}

  onProjectClicked() {
    this.projectsService.projectSelected.emit(this.project);
  }
}
