import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { 
      id: '1000', 
      code: 'f230fh0g3', 
      name: 'Hamburguesa', 
      description: 'Deliciosa hamburguesa con queso', 
      image: 'assets/images/hamburguesa.webp', // Ruta correcta
      price: 5.99, 
      category: 'Comida Rápida', 
      quantity: 24, 
      inventoryStatus: 'INSTOCK', 
      rating: 5 
    },
    { 
      id: '1001', 
      code: 'nvklal433', 
      name: 'Pizza', 
      description: 'Pizza de pepperoni', 
      image: 'assets/images/pizza.webp', // Ruta correcta
      price: 8.99, 
      category: 'Comida Rápida', 
      quantity: 10, 
      inventoryStatus: 'LOWSTOCK', 
      rating: 4 
    },
    { 
      id: '1002', 
      code: 'zz21cz3c1', 
      name: 'Gaseosa', 
      description: 'Refresco de cola', 
      image: 'assets/images/gaseosa.webp', // Ruta correcta
      price: 1.99, 
      category: 'Bebida', 
      quantity: 50, 
      inventoryStatus: 'INSTOCK', 
      rating: 3 
    }
  ];

  constructor() {}

  ngOnInit() {}

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
