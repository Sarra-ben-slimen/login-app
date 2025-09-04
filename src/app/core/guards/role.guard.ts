import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router } from "@angular/router";
import { map, retry } from "rxjs";
import { AuthService } from "src/app/features/auth/services/auth.service";

 
export const roleGuard : CanActivateFn =(route:ActivatedRouteSnapshot) =>{
            const router = inject(Router);
            const authService = inject(AuthService);

            const expectedRole = route.data['role'];
            const userRole = authService.getUserRole();

                        if (!authService.isLoggedIn()||userRole !== expectedRole) {
                              return true;
                        } else {
                              router.navigate(['/login']);
                              return false;
                        }
                  
                       
                  
            
           
      

}