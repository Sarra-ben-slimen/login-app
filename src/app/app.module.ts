import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/auth/components/login-form/login.component';
import { AuthModule } from './features/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =
  [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, //default route
    { path: 'login', component: LoginComponent }
  ]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    RouterModule.forRoot(routes)
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
