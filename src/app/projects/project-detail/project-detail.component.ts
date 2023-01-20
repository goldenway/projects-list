import { Component, Input } from '@angular/core';
import { TechnologiesService } from 'src/app/technologies/technologies.service';
import { Project } from '../project.model';

@Component({
  selector: 'pl-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent {
  @Input() project: Project;

  constructor(private technologisService: TechnologiesService) {}

  onRecalculateTechnologies() {
    this.technologisService.recalculateTechnologies(this.project.technologies);
  }
}
