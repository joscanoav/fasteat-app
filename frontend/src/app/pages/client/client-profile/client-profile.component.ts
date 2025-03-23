import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-profile',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, CardModule, FormsModule], // Importa módulos de PrimeNG
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {
  user = {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '123-456-7890'
  };

  saveProfile() {
    alert('Perfil actualizado correctamente');
  }
}
