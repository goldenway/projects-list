import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProjectsComponent } from "./projects/projects.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { ProjectStartComponent } from "./projects/project-start/project-start.component";
import { ProjectDetailComponent } from "./projects/project-detail/project-detail.component";
import { ProjectEditComponent } from "./projects/project-edit/project-edit.component";
import { ProjectsResolverService } from "./projects/projects-resolver.service";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, resolve: [ProjectsResolverService], children: [
    { path: '', component: ProjectStartComponent },
    { path: 'new', component: ProjectEditComponent },
    { path: ':id', component: ProjectDetailComponent, resolve: [ProjectsResolverService] },
    { path: ':id/edit', component: ProjectEditComponent, resolve: [ProjectsResolverService] }
  ] },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
