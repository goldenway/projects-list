import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { TechnologiesService } from 'src/app/technologies/technologies.service';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'pl-project-detail',
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  projectId: number;

  constructor(private technologisService: TechnologiesService,
              private projectService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.projectId = +params['id'];
        this.project = this.projectService.getProjectById(this.projectId);
      }
    );
  }

  onRecalculateTechnologies() {
    this.technologisService.recalculateTechnologies(this.project.technologies);
  }

  onEditProject() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteProject () {
    this.projectService.deleteProject(this.projectId);
    this.router.navigate(['/projects']);
  }
}
