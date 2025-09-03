import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login-form/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
      declarations: [LoginComponent],
      imports: [
            ReactiveFormsModule,
            SharedModule // <-- provides InputFieldComponent + ReactiveFormsModule
      ]
})
export class AuthModule { }