import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { OrderService } from '../../../core/order.service';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ToastModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [MessageService]
})
export class AdminOrdersComponent implements OnInit {
  orders: any[] = []; // Lista de pedidos

  constructor(
    private orderService: OrderService, // Inyecta el servicio
    private messageService: MessageService // Servicio para notificaciones
  ) {}

  ngOnInit() {
    this.loadOrders(); // Carga los pedidos al iniciar el componente
  }

  // Método para cargar los pedidos desde el servicio
  loadOrders() {
    this.orders = this.orderService.getAllOrders();
  }

  // Método para obtener la severidad del estado (colores)
  getSeverity(status: string) {
    switch (status) {
      case 'Pendiente':
        return 'warn'; // Amarillo/naranja
      case 'Completado':
        return 'success'; // Verde
      case 'En proceso':
        return 'info'; // Azul
      default:
        return 'danger'; // Rojo
    }
  }
}
