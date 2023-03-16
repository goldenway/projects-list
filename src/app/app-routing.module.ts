import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [ RouterModule.forRoot([
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
  ]) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
