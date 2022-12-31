import { Component, Input } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'pl-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent {
  @Input() project: Project;
}
