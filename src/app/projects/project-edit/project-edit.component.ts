import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
    const newProject = this.projectForm.value;

    if (this.isEditMode) {
      this.projectsService.updateProject(this.id, newProject);
    } else {
      this.projectsService.addProject(newProject);
    }
  }

  onAddTechnology() {
    const newTechnology = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'count': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
    (<FormArray>this.projectForm.get('technologies')).push(newTechnology);
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
            'name': new FormControl(technology.name, Validators.required),
            'count': new FormControl(technology.count, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.projectForm = new FormGroup({
       'name': new FormControl(projectName, Validators.required),
       'imagePath': new FormControl(projectImagePath, Validators.required),
       'description': new FormControl(projectDescription, Validators.required),
       'technologies': projectTechnologies
    });
  }
}
