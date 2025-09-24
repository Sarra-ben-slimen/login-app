import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  connected = false;
  token:string |null=null;
  constructor(private authService: AuthService,private router:Router) { }
  ngOnInit() :void {
    this.token = this.authService.getToken();
    this.connected == !!this.token;
  }
  logout(): void {
    this.authService.removeToken();
    this.token = null;
    this.connected = false;
    this.router.navigate(['/login']);  
  }
}
