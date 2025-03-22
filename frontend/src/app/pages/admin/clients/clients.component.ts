import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../core/user.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, ToastModule], // Importa módulos de PrimeNG
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [MessageService] // Proveedor para el servicio de mensajes
})
export class ClientsComponent implements OnInit {
  clients: any[] = []; // Lista de clientes

  constructor(
    private userService: UserService, // Inyecta el servicio
    private messageService: MessageService // Servicio para notificaciones
  ) {}

  ngOnInit() {
    this.loadClients(); // Carga los clientes al iniciar el componente
  }

  // Método para cargar los clientes desde el servicio
  loadClients() {
    this.clients = this.userService.getClients();
  }

  // Método para obtener la severidad del estado (colores)
  getSeverity(status: string) {
    switch (status) {
      case 'Activo':
        return 'success'; // Verde
      case 'Inactivo':
        return 'danger'; // Rojo
      default:
        return 'info'; // Azul
    }
  }
}

