import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-client-orders',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, CardModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class ClientOrdersComponent {
  orders = [
    { id: 1, product: 'Hamburguesa', status: 'Completado', total: 5.99 },
    { id: 2, product: 'Pizza', status: 'En proceso', total: 8.99 }
  ];

  getSeverity(status: string) {
    switch (status) {
      case 'Completado':
        return 'success'; // Verde
      case 'En proceso':
        return 'warn'; // Cambiado de "warning" a "warn"
      default:
        return 'danger'; // Rojo
    }
  }
}