import { Component, OnInit } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { MegaMenu } from 'primeng/megamenu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { FooterComponent } from '../../../shared/footer/footer.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [MegaMenu, ButtonModule, CommonModule, RouterModule, Carousel, Tag, FooterComponent],
})
export class HomeComponent implements OnInit {
    menuItems: MegaMenuItem[] | undefined;
    promotions: any[] = []; // Inicializa como un array vacío
    responsiveOptions: any[] | undefined;

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Nuestra Carta',
                icon: 'pi pi-book',
                routerLink: '/menu',
            },
            {
                label: 'Cupones',
                icon: 'pi pi-ticket',
                routerLink: '/coupons',
            },
            {
                label: 'Encuentra tu FastEat',
                icon: 'pi pi-map-marker',
                routerLink: '/locations',
            },
        ];

        // Asigna las promociones
        this.promotions = [
            {
                name: 'Sobrados 50% OFF',
                image: 'assets/images/promo1.jpg',
                price: '50% OFF',
                tag: 'LIMITED TIME',
            },
            {
                name: 'Burger Olvidada',
                image: 'assets/images/promo2.jpg',
                price: '$10.99',
                tag: 'NEW',
            },
            {
                name: 'Combo Familiar',
                image: 'assets/images/promo3.jpg',
                price: '$25.99',
                tag: 'POPULAR',
            },
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1,
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'LIMITED TIME':
                return 'danger';
            case 'NEW':
                return 'success';
            case 'POPULAR':
                return 'warn';
            default:
                return 'info';
        }
    }

    // Método para comenzar un pedido
    startOrder() {
        console.log('Comenzar pedido');
        // Aquí puedes redirigir al usuario a la página de menú o realizar otra acción
        // Por ejemplo:
        // this.router.navigate(['/menu']);
    }
}