import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'pl-projects-list',
  templateUrl: './projects-list.component.html'
})
export class ProjectsListComponent implements OnInit {
  projects: Project[];

  constructor(private projectsService: ProjectsService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
    this.projectsService.projectsChanged.subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

  onNewProjectClicked() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
