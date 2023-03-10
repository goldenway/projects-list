import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, Subject, take, tap } from 'rxjs';

import { Project } from './project.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProjectsService {
  projectsChanged = new Subject<Project[]>();
  private projects: Project[] = [];

  constructor(private http: HttpClient,
              private authService: AuthService) {}

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
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Project[]>(
          'https://gw-projects-list-default-rtdb.firebaseio.com/projects.json',
          {
            params: new HttpParams().set('auth', user.token)
          }
        )
      }),
      map(projects => {                     // map - RxJS operator
        return projects.map(project => {    // map - array method
          return {...project, technologies: project.technologies ? project.technologies : []};
        });
      }),
      tap(projects => {
        this.setProjects(projects);
      })
    );
  }
}
