import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkandiaComponent } from './pages/skandia/skandia.component';

const routes: Routes = [
  { path: '', redirectTo: 'skandia', pathMatch: 'full' },
  { path: 'skandia', component: SkandiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
