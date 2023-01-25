import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProjectsComponent } from "./projects/projects.component";
import { TechnologiesComponent } from "./technologies/technologies.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'technologies', component: TechnologiesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
