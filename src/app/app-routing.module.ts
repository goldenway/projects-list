import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProjectsComponent } from "./projects/projects.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { ProjectStartComponent } from "./projects/project-start/project-start.component";
import { ProjectDetailComponent } from "./projects/project-detail/project-detail.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent, children: [
    { path: '', component: ProjectStartComponent },
    { path: ':id', component: ProjectDetailComponent }
  ] },
  { path: 'technologies', component: TechnologiesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
