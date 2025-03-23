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

    // Si el usuario no está autenticado, redirige al login
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }

    // Verifica si la ruta es de administración
    const isAdminRoute = state.url.startsWith('/admin');

    // Si la ruta es de administración y el usuario no es admin, redirige al menú del cliente
    if (isAdminRoute && userRole !== 'admin') {
      this.router.navigate(['/client/menu']); // Redirige a la ruta correcta
      return false;
    }

    // Permite el acceso
    return true;
  }
}


