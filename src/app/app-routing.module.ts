import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TechnologiesComponent } from "./technologies/technologies.component";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
