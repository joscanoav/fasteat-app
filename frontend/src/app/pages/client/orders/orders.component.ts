import { Component } from '@angular/core';
import { OrderService } from '../../../core/order.service';

@Component({
  selector: 'app-client-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class ClientOrdersComponent {
  orders: any[] = [];

  constructor(private orderService: OrderService) {
    this.loadOrders();
  }

  loadOrders() {
    this.orders = this.orderService.getOrdersForCurrentUser();
  }
}