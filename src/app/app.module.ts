import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './features/components/login-form/login-form/login-form.component';

const routes: Routes =
[
    { path: '', redirectTo: 'login', pathMatch: 'full' }, //default route
{path:'login',component:LoginFormComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
