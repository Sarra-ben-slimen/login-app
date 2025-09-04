import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  error = '';
  
  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }

  onsubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email,password).subscribe({
        next: (res) => {
          this.authService.saveToken(res.token)
          var role = this.authService.getUserRole();
          console.log('role is'+role);

          if (role === 'admin') {
            this.router.navigate(['/admin-dashboard'])
          }
          else
          {
            this.router.navigate(['/user-dashboard'])
          }
        },
        error: () => {
          this.error='invalide data'
        }
      })
    }
  }
}
