import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registreForm : FormGroup;
  error = '';
  constructor(private fb : FormBuilder, private authService:AuthService)
  {
    this.registreForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatedPassword: ['',Validators.required]
    })
  }

  onRegistre() {
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
