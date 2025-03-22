import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor() { }

  // Método para obtener todas las órdenes (usado en el admin)
  getAllOrders() {
    // Simula la obtención de todas las órdenes
    return [
      { id: 1, product: 'Hamburguesa', status: 'Pendiente', total: 5.99 },
      { id: 2, product: 'Pizza', status: 'En proceso', total: 8.99 },
      { id: 3, product: 'Gaseosa', status: 'Completado', total: 1.99 }
    ];
  }

  // Método para obtener las órdenes del usuario actual (usado en el cliente)
  getOrdersForCurrentUser() {
    // Simula la obtención de órdenes para el usuario actual
    return [
      { id: 4, product: 'Papas Fritas', status: 'Pendiente', total: 3.50 },
      { id: 5, product: 'Refresco', status: 'Entregado', total: 2.00 }
    ];
  }
}