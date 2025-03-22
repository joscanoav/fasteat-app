import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: { name: string; email: string; password: string; role: string }[] = [
    {
      name: 'Admin User',
      email: 'admin@admin.com',
      password: 'admin123', // Contraseña de ejemplo
      role: 'admin',
    },
    {
      name: 'Regular User',
      email: 'user@user.com',
      password: 'user123', // Contraseña de ejemplo
      role: 'user',
    },
  ];

  constructor(private router: Router) {}

  login(email: string, password: string): void {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));

      // Redirigir a dashboard si es un admin, de lo contrario al menú
      if (user.role === 'admin') {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/menu']);
      }
    } else {
      alert('Credenciales incorrectas');
    }
  }

  register(name: string, email: string, password: string): void {
    if (this.users.some((u) => u.email === email)) {
      alert('El email ya está registrado.');
      return;
    }
    this.users.push({ name, email, password, role: 'user' });
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  getRole(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user?.role || 'guest';
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}



