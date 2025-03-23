import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-client-layout',
  imports: [NavbarComponent,CommonModule,RouterOutlet], // Añade NavbarComponent a imports
  standalone: true, // Marca el componente como independiente
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.css',
})
export class ClientLayoutComponent {}