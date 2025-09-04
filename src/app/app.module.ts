import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './features/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './features/auth/login-form/login.component';
import { UserDashboardComponent } from './features/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';


const routes: Routes =
  [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, //default route
    { path: 'login', component: LoginComponent },
 {
            path: 'user-dashboard',
            component: UserDashboardComponent,
            canActivate: [authGuard, roleGuard],
            data: { role: 'user' }
      },
      {
            path: 'admin-dashboard',
            component: AdminDashboardComponent,
            canActivate: [authGuard, roleGuard],
            data: { role: 'admin' }
      }
  ]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AuthModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
