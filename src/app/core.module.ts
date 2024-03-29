import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderComponent } from "./header/header.component";
import { ProjectsService } from "./projects/projects.service";
import { AuthInterseptorService } from "./auth/auth-interceptor.service";
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [ HeaderComponent ],
  providers: [
    ProjectsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterseptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
