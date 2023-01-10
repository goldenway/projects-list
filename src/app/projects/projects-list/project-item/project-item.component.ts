import { Component, Input } from '@angular/core';
import { Project } from '../../project.model';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'pl-project-item',
  templateUrl: './project-item.component.html'
})
export class ProjectItemComponent {
  @Input() project: Project;

  constructor(private projectService: ProjectService) {}

  onProjectClicked() {
    this.projectService.projectSelected.emit(this.project);
  }
}
