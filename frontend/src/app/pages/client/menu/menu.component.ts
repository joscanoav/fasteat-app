import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, CardModule], // Importa módulos de PrimeNG
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products = [
    { id: 1, name: 'Hamburguesa', price: 5.99 },
    { id: 2, name: 'Pizza', price: 8.99 },
    { id: 3, name: 'Gaseosa', price: 1.99 }
  ];

  addToCart(product: any) {
    alert(`Añadido al carrito: ${product.name}`);
  }
}