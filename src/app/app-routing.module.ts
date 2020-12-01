import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//==============Login============//
import { LoginComponent } from './origin/login/login.component';
import { AboutComponent } from './origin/about/about.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
