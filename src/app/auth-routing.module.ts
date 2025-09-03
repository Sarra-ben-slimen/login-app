// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/components/login-form/login.component';

const routes: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // default
      { path: 'login', component: LoginComponent }
];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule { }
