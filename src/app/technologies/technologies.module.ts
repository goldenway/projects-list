import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { TechnologiesEditComponent } from "./technologies-edit/technologies-edit.component";
import { TechnologiesComponent } from "./technologies.component";

@NgModule({
  declarations: [
    TechnologiesComponent,
    TechnologiesEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'technologies', component: TechnologiesComponent }
    ])
  ]
})
export class TechnologiesModule {}
 