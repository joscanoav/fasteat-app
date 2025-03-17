import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userRole: string | null = null;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === 'admin@fast-eat.com' && password === 'admin123') {
      this.userRole = 'admin';
    } else {
      this.userRole = 'user';
    }
    localStorage.setItem('role', this.userRole);
    this.router.navigate([this.userRole === 'admin' ? '/admin/dashboard' : '/menu']);
    return true;
  }

  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isAuthenticated(): boolean {
    return this.getRole() !== null;
  }
}

