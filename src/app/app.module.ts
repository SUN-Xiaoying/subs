import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//============Route=============//
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

//============Login=============//
import { LoginComponent } from './origin/login/login.component';
import { RegisterComponent } from './origin/register/register.component';
import { UserItemComponent } from './user/user-item/user-item.component';
import { AboutComponent } from './origin/about/about.component';

//============Form=============//
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFormComponent } from './form/create-form/create-form.component';
import { ItemComponent } from './form/item/item.component';
import { PanelComponent } from './form/panel/panel.component';
import { FormListComponent } from './form/form-list/form-list.component';

//===========Service===========//



@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    FormListComponent,
    AboutComponent,
    CreateFormComponent,
    ItemComponent,
    PanelComponent,
    // LoginComponent,
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'about', component: AboutComponent},
      {path: 'create-form', component: CreateFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
