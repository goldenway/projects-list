import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

import { Project } from './project.model';
import { Technology } from '../shared/technology.model'

@Injectable()
export class ProjectsService {
  projectsChanged = new Subject<Project[]>();
  private projects: Project[] = [];

  constructor(private http: HttpClient) {}

  setProjects(projects: Project[]) {
    this.projects = projects;
    this.projectsChanged.next(this.projects.slice());
  }

  getProjects(): Project[] {
    // getting a copy of projects array
    return this.projects.slice();
  }

  getProjectById(index: number): Project {
    return this.projects[index];
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.projectsChanged.next(this.projects.slice());
  }

  updateProject(index: number, newProject: Project) {
    this.projects[index] = newProject;
    this.projectsChanged.next(this.projects.slice());
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
    this.projectsChanged.next(this.projects.slice());
  }

  saveProjects() {
     this.http
      .put<Project[]>('https://gw-projects-list-default-rtdb.firebaseio.com/projects.json', this.projects)
      .subscribe(response => console.log(response));
  }

  fetchProjects() {
    this.http
      .get<Project[]>('https://gw-projects-list-default-rtdb.firebaseio.com/projects.json')
      .pipe(map(projects => {               // map - RxJS operator
        return projects.map(project => {    // map - array method
          return {...project, technologies: project.technologies ? project.technologies : []};
        });
      }))
      .subscribe(projects => this.setProjects(projects));
  }
}
