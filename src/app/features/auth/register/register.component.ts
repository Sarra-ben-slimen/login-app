import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  showVerification = false;
  verificationCode: string = '';
  userId: string = '';
  password: string = '';
  email: string = '';


  constructor(private fb : FormBuilder, private authService:AuthService,private router:Router)
  {
    this.registreForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), passwordStrengthValidator ]],
        repeatedPassword: ['', Validators.required],
        verificationCode: [''] 

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
      this.authService.register(email, password, repeatedPassword, '').subscribe({
        next: (res: any) => {
          
     
          this.userId = res.user.id;  
          this.password = password; 
          this.email = email;
          this.verificationCode = res.user.codeVerification;
          this.showVerification = true;
        },
        error: () => {
          this.error='invalide data / probleme de saisir '
        }
      })
    }
  }
  verifyCode() {
    this.authService.verifyCode(this.userId, this.verificationCode, this.email, this.password).subscribe({
  
      next: (res:any) => {
       
        this.authService.saveToken(res.token)

        this.router.navigate(['/user-dashboard']);

      }, error: () => {
        this.error = 'invalide code ';
      }


    })
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
}
