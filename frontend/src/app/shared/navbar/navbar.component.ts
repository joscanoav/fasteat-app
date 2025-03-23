import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AuthService } from '../../core/auth.service'; // Importa el AuthService
import { Router } from '@angular/router'; // Importa el Router para redireccionar
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true,
    imports: [MegaMenu, ButtonModule, CommonModule, AvatarModule, RouterModule], // Añade RouterModule aquí
})
export class NavbarComponent implements OnInit {
    items: MegaMenuItem[] | undefined;

    constructor(private authService: AuthService, private router: Router) {} // Inyecta AuthService y Router

    ngOnInit() {
        this.items = [
            {
                label: 'Menú',
                icon: 'pi pi-list',
                routerLink: '/client/menu', // Navega al menú de productos
            },
            {
                label: 'Carrito',
                icon: 'pi pi-shopping-cart',
                routerLink: '/client/cart', // Navega al carrito de compras
            },
            {
                label: 'Pedidos',
                icon: 'pi pi-history',
                routerLink: '/client/orders', // Navega al seguimiento de pedidos
            },
            {
                label: 'Perfil',
                icon: 'pi pi-user',
                routerLink: '/client/profile', // Navega al perfil del usuario
            },
        ];
    }

    // Función para cerrar sesión
    logout() {
        this.authService.logout(); // Llama al método logout del AuthService
        this.router.navigate(['/login']); // Redirige al login
    }
}
