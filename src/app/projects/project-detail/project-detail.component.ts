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
  projectIndex: number;

  constructor(private technologisService: TechnologiesService,
              private projectService: ProjectsService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.projectIndex = +params['id'];
        this.project = this.projectService.getProjectWithIndex(this.projectIndex);
      }
    );
  }

  onRecalculateTechnologies() {
    this.technologisService.recalculateTechnologies(this.project.technologies);
  }

  onEditClicked() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
