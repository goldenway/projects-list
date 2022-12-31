import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../project.model';

@Component({
  selector: 'pl-project-item',
  templateUrl: './project-item.component.html'
})
export class ProjectItemComponent {
  @Input() project: Project;
  @Output() projectClicked = new EventEmitter<void>();

  onProjectClicked() {
    this.projectClicked.emit();
  }
}
