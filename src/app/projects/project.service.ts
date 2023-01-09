import { Project } from './project.model';

export class ProjectService {
  private projects: Project[] = [
    new Project('Test Project 1', 'Test description 1', 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/how_to_create_a_project_timeline_-_article_image.jpg'),
    new Project('Test Project 2', 'Test description 2', 'https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg'),
    new Project('Test Project 3', 'Test description 3', 'https://mediasat.info/wp-content/uploads/2020/07/project-management.jpg')
  ];

  getProjects() {
    // getting a copy of projects array
    return this.projects.slice();
  }
}
