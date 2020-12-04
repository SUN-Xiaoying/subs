import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//==============Login============//
import { LoginComponent } from './origin/login/login.component';
import { AboutComponent } from './origin/about/about.component';
import { RegisterComponent } from './origin/register/register.component';


const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo:'/register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
