import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommitsComponent} from './commits/commits.component';
import {SingleCommitPageComponent} from './single-commit-page/single-commit-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/commits', pathMatch: 'full' },
  { path: 'commits', component: CommitsComponent },
  { path: 'commits/:sha', component: SingleCommitPageComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
