import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'pl-project-edit',
  templateUrl: './project-edit.component.html'
})
export class ProjectEditComponent implements OnInit {
  isEditMode = false;
  id: number;
  projectForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.isEditMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  get controls() {
    return (<FormArray>this.projectForm.get('technologies')).controls;
  }

  onSubmit() {
   console.log(this.projectForm); 
  }

  private initForm() {
    let projectName = '';
    let projectImagePath = '';
    let projectDescription = '';
    let projectTechnologies = new FormArray([]);

    if (this.isEditMode) {
      const project = this.projectsService.getProjectWithIndex(this.id);
      projectName = project.name;
      projectImagePath = project.imagePath;
      projectDescription = project.description;
      if (project['technologies']) {
        for (let technology of project.technologies) {
          projectTechnologies.push(new FormGroup({
            'name': new FormControl(technology.name),
            'count': new FormControl(technology.count)
          }));
        }
      }
    }

    this.projectForm = new FormGroup({
       'name': new FormControl(projectName),
       'imagePath': new FormControl(projectImagePath),
       'description': new FormControl(projectDescription),
       'technologies': projectTechnologies
    });
  }
}
