import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { ProjectDetailComponent } from "./project-detail/project-detail.component";
import { ProjectEditComponent } from "./project-edit/project-edit.component";
import { ProjectStartComponent } from "./project-start/project-start.component";
import { ProjectItemComponent } from "./projects-list/project-item/project-item.component";
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";
import { DropdownDirective } from "../shared/dropdown.directive";

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectStartComponent,
    ProjectsListComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule {}
