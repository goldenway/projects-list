import { Component, Input } from '@angular/core';

import { Project } from '../../project.model';

@Component({
  selector: 'pl-project-item',
  templateUrl: './project-item.component.html'
})
export class ProjectItemComponent {
  @Input() project: Project;
  @Input() projectIndex: number;
}
