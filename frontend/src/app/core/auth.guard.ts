import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.authService.isAuthenticated();
    const userRole = this.authService.getRole();

    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    const isAdminRoute = state.url.startsWith('/admin');
    
    if (isAdminRoute && userRole !== 'admin') {
      this.router.navigate(['/menu']);
      return false;
    }

    return true;
  }
}


