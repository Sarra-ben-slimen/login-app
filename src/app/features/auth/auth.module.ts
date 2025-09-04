import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login-form/login.component';


@NgModule({
      declarations: [LoginComponent],
      imports: [
            ReactiveFormsModule,
            SharedModule // <-- provides InputFieldComponent + ReactiveFormsModule
      ]
})
export class AuthModule { }