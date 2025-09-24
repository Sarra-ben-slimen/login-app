import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login-form/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
      declarations: [LoginComponent, RegisterComponent],
      imports: [
            ReactiveFormsModule,
            SharedModule // <-- provides InputFieldComponent + ReactiveFormsModule
      ]
})
export class AuthModule { }