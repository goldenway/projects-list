import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'pl-projects-list',
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent implements OnInit {
  @Output() projectSelected = new EventEmitter<Project>();
  projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  onProjectSelected(project: Project) {
    this.projectSelected.emit(project);
  }
}
