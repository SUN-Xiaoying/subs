import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { UserItemComponent } from './user/user-item/user-item.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { WelcomeComponent } from './login/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { CreateFormComponent } from './form/create-form/create-form.component';
import { ItemComponent } from './form/item/item.component';
import { PanelComponent } from './form/panel/panel.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    FormListComponent,
    WelcomeComponent,
    CreateFormComponent,
    ItemComponent,
    PanelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'welcome', component: WelcomeComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
