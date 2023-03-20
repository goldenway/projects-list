import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { TechnologiesEditComponent } from "./technologies-edit/technologies-edit.component";
import { TechnologiesComponent } from "./technologies.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    TechnologiesComponent,
    TechnologiesEditComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: TechnologiesComponent }
    ]),
    FormsModule,
    SharedModule
  ]
})
export class TechnologiesModule {}
 