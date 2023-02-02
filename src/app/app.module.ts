import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectStartComponent } from './projects/project-start/project-start.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectItemComponent } from './projects/projects-list/project-item/project-item.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TechnologiesEditComponent } from './technologies/technologies-edit/technologies-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectStartComponent,
    ProjectsListComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    TechnologiesComponent,
    TechnologiesEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
