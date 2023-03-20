import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) },
  { path: 'projects', loadChildren: () => import('./projects/projects.module').then(mod => mod.ProjectsModule) },
  { path: 'technologies', loadChildren: () => import('./technologies/technologies.module').then(mod => mod.TechnologiesModule) },
  { path: '**', redirectTo: '/projects' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
