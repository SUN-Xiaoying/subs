import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//============Route=============//
import { AppRoutingModule } from './app-routing.module';

//============Route=============//
import { HttpClientModule } from '@angular/common/http';

//============Login=============//
import { UserItemComponent } from './user/user-item/user-item.component';


//============Form=============//
import { ReactiveFormsModule } from '@angular/forms';
import { CreateFormComponent } from './form/create-form/create-form.component';
import { ItemComponent } from './form/item/item.component';
import { PanelComponent } from './form/panel/panel.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { CreateItemComponent } from './form/create-item/create-item.component';

//===========Service===========//
import { FormService } from './services/form.service';
import { AuthService } from './auth/auth.service';
import { InMemoryAuthService } from './auth/auth.inmemory.service';



@NgModule({
  declarations: [
    AppComponent,
    UserItemComponent,
    FormListComponent,
    CreateFormComponent,
    ItemComponent,
    PanelComponent,
    CreateItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    FormService,
    {
      provide: AuthService,
      useClass: InMemoryAuthService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
