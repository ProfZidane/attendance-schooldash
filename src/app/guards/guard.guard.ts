import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('app-token');
      let datas = localStorage.getItem('user-data');
      
      if (token !== null && datas !== null) {
        const data = JSON.parse(datas).role;
        if (data === "administrator" || data === "system_administrator") {

          return true;

        } else {
          
          if (datas) {
            this.authService.logout({ _id: JSON.parse(datas)._id }).subscribe(
              (success) => {
                console.log(success);
                
                localStorage.removeItem('app-token');
                localStorage.removeItem('user-data');
              }, (err) => {
                console.log(err);
                localStorage.removeItem('app-token');
                localStorage.removeItem('user-data');
              }
            );
          } else {
            localStorage.removeItem('app-token');
            localStorage.removeItem('user-data');    
          }
          
          this.router.navigateByUrl('/');
          return false;

        }
        
      } else {
        localStorage.removeItem('app-token');
        localStorage.removeItem('user-data');
        this.router.navigateByUrl('/');
        return false;
      }
    
  }
  
}
