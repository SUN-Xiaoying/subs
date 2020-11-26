import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './user/user-item/user-item.component';
import { FormItemComponent } from './form/form-item/form-item.component';
import { WelcomeComponent } from './login/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { CreateFormComponent } from './form/create-form/create-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    FormItemComponent,
    WelcomeComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
