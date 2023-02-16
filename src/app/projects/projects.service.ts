import { Subject } from 'rxjs';

import { Project } from './project.model';
import { Technology } from '../shared/technology.model';

export class ProjectsService {
  projectsChanged = new Subject<Project[]>();

  private projects: Project[] = [
    new Project(
      'Project 1',
      'Project description 1',
      '../../assets/01.jpg',
      [
        new Technology('JavaScript', 1),
        new Technology('CSS3', 1)
      ]),
    new Project(
      'Project 2',
      'Project description 2',
      '../../assets/02.jpg',
      [
        new Technology('Angular', 1),
        new Technology('CSS3', 1),
        new Technology('HTML5', 1)
      ]),
    new Project(
      'Project 3',
      'Project description 3',
      '../../assets/03.jpg',
      [
        new Technology('TypeScript', 1),
        new Technology('HTML5', 1)
      ])
  ];

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
}
