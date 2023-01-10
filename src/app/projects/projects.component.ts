import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'pl-projects',
  templateUrl: './projects.component.html',
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.projectSelected.subscribe(
      (project: Project) => {
        this.selectedProject = project;
      }
    );
  }
}
