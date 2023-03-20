import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { ProjectEditComponent } from "./project-edit/project-edit.component";
import { ProjectStartComponent } from "./project-start/project-start.component";
import { ProjectsResolverService } from "./projects-resolver.service";
import { ProjectsComponent } from "./projects.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  { path: '', component: ProjectsComponent, resolve: [ProjectsResolverService], canActivate: [AuthGuard], children: [
    { path: '', component: ProjectStartComponent },
    { path: 'new', component: ProjectEditComponent },
    { path: ':id', component: ProjectDetailComponent, resolve: [ProjectsResolverService] },
    { path: ':id/edit', component: ProjectEditComponent, resolve: [ProjectsResolverService] }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
