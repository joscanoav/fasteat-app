import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-client-home',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule], // Importa módulos de PrimeNG
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent {
  // Puedes agregar lógica adicional aquí
}
