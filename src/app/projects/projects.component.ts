import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'pl-projects',
  templateUrl: './projects.component.html',
  providers: [ProjectsService]
})
export class ProjectsComponent {}
