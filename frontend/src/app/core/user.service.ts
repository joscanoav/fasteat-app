import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  // Método para obtener la lista de clientes
  getClients() {
    // Simula la obtención de clientes
    return [
      { name: 'Juan Pérez', email: 'juan@example.com', status: 'Activo' },
      { name: 'María López', email: 'maria@example.com', status: 'Inactivo' },
      { name: 'Carlos Gómez', email: 'carlos@example.com', status: 'Activo' }
    ];
  }
}