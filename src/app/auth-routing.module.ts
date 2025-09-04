// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { UserDashboardComponent } from './features/user-dashboard/user-dashboard.component';
import { LoginComponent } from './features/auth/login-form/login.component';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
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
      },
      { path: '**', redirectTo: 'login' }
];

@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule { }
