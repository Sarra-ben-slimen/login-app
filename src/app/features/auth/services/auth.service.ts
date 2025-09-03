import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface LoginResponse {
      token: string;
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
}