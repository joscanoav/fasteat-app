import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: { name: string; email: string; password: string; role: string }[] = [];

  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(private router: Router) {
    this.loadUsers();
  }

  /** Cargar usuarios desde localStorage o usar valores por defecto */
  private loadUsers(): void {
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [
      { name: 'Admin User', email: 'admin@admin.com', password: 'admin123', role: 'admin' },
      { name: 'Regular User', email: 'user@user.com', password: 'user123', role: 'user' }
    ];
  }

  /** Guardar usuarios en localStorage */
  private saveUsers(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  /** Verifica si hay un usuario autenticado */
  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  /** Retorna el estado de autenticación como observable */
  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  /** Obtiene el rol del usuario */
  getRole(): string {
    try {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      return user?.role || 'guest';
    } catch {
      return 'guest';
    }
  }

  /** Simula un login validando contra la lista de usuarios */
  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.authStatus.next(true);
  
      // Redirige según el rol
      if (user.role === 'admin') {
        this.router.navigate(['/admin/dashboard']); // Redirige al panel de admin
      } else {
        this.router.navigate(['/client/menu']); // Redirige al menú del cliente
      }
      return true;
    } else {
      alert('Credenciales incorrectas');
      return false;
    }
  
  }

  /** Simula un registro de usuario */
  register(name: string, email: string, password: string): boolean {
    if (this.users.some(u => u.email === email)) {
      alert('El email ya está registrado.');
      return false;
    }
    const newUser = { name, email, password, role: 'user' };
    this.users.push(newUser);
    this.saveUsers(); // Guardar en localStorage
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    return true;
  }

  /** Cierra sesión */
  logout(): void {
    localStorage.removeItem('user');
    this.authStatus.next(false);
    this.router.navigate(['/login']);
  }
}




