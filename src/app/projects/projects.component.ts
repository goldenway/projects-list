import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@Component({
  selector: 'pl-projects',
  templateUrl: './projects.component.html',
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  selectedProject: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.projectSelected.subscribe(
      (project: Project) => {
        this.selectedProject = project;
      }
    );
  }
}
