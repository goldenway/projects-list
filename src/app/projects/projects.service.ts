import { Project } from './project.model';
import { Technology } from '../shared/technology.model';

export class ProjectsService {
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

  getProjectWithIndex(index: number): Project {
    return this.projects[index];
  }
}
