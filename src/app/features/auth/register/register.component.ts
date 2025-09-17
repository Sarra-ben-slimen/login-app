import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  showPassword: boolean = false;
  showRepeatedPassword: boolean = false;

  registreForm : FormGroup;
  error = '';
  constructor(private fb : FormBuilder, private authService:AuthService)
  {
    this.registreForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), passwordStrengthValidator ]],
        repeatedPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator } 
    );
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const repeatedPassword = control.get('repeatedPassword')?.value;
    return password === repeatedPassword ? null : { mismatch: true };
  };
  onRegistre() {
    if (this.registreForm.invalid) {
      this.registreForm.markAllAsTouched();
      console.log('test test');
      return;
    }
    if (this.registreForm.valid) {
      const { email, password, repeatedPassword } = this.registreForm.value;
      this.authService.register(email,password,repeatedPassword).subscribe({
        next: () => {
          
        },
        error: () => {
          this.error='invalide data / probleme de saisir '
        }
      })
    }
  }

}
export const passwordStrengthValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value = control.value;
  if (!value) return null;

  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  const hasSpecialChar = /[!@#$%^&*]/.test(value);
  const minLength = value.length >= 6;

  const valid = hasUpperCase && hasNumber && hasSpecialChar && minLength;

  return valid ? null : { weakPassword: true };
};
