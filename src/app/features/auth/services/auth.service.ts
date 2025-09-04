import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {   Observable, of } from "rxjs";
import { jwtDecode } from 'jwt-decode';
interface LoginResponse {
      token: string;
}
interface TokenPayLoad
{
      exp: number;
      role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
      private apiURL = 'http://localhost:5067';
      constructor(private http: HttpClient) { }

      login(email: string, password: string): Observable<LoginResponse> {
            return this.http.post<LoginResponse>(`${this.apiURL}/Auth/login`, { email, password });
      }
      saveToken(token: string) {
            localStorage.setItem('token', token);
      }
      logout() {
            localStorage.removeItem('token');
      }
      isLoggedIn(): boolean{
            const token = this.getToken();
            if (!token) return false;
            const decode = jwtDecode<{ exp: number }>(token);
            const now = Date.now().valueOf() / 1000;
            return decode.exp ? decode.exp > now : true;
      }
      getToken() {
            return localStorage.getItem('token');
      }
      getUserRole():string {
            const token = this.getToken();
            if (!token) {
                  return '';
            }
            const decoded = jwtDecode<{ role: string }>(token);
            return decoded.role || '';
      }
}