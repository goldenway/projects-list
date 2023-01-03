import { Component } from '@angular/core';
import { Technology } from '../shared/technology.model';

@Component({
  selector: 'pl-technologies',
  templateUrl: './technologies.component.html'
})
export class TechnologiesComponent {
  technologies: Technology[] = [
    new Technology('JavaScript', 5),
    new Technology('HTML5', 5),
    new Technology('Angular', 4)
  ];

  onTechnologyAdded(technology: Technology) {
    this.technologies.push(technology);
  }
}
