import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeTextComponent } from './welcome-text/welcome-text.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadComponent } from './read/read.component';
import { HttpClientModule } from '@angular/common/http';
import { EditionComponent } from './edition/edition.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginFormComponent,
    WelcomeTextComponent,
    RegistrationFormComponent,
    ReadComponent,
    EditionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: WelcomeTextComponent },
      { path: "login", component: LoginFormComponent },
      { path: "registration", component: RegistrationFormComponent },
      { path: "ler/:customer", component: ReadComponent},
      { path: "editar/:customer", component: EditionComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
