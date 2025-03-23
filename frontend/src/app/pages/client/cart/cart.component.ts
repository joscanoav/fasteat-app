import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, CardModule], // Importa módulos de PrimeNG
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = [
    { id: 1, name: 'Hamburguesa', price: 5.99, quantity: 2 },
    { id: 2, name: 'Pizza', price: 8.99, quantity: 1 }
  ];

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  checkout() {
    alert('Compra realizada correctamente');
  }
}
