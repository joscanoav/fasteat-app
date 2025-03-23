import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [
        CommonModule, 
        RouterModule, 
        MegaMenu, 
        ButtonModule, 
        Carousel, 
        Tag, 
        FooterComponent, 
        Dialog, 
        InputTextModule, 
        LoginComponent
    ],
})
export class HomeComponent implements OnInit {
    menuItems: MegaMenuItem[] = [];
    promotions: any[] = [];
    responsiveOptions: any[] = [];
    loginDialogVisible: boolean = false; // 📌 Variable de control del diálogo

    ngOnInit() {
        this.menuItems = [
            { label: 'Nuestra Carta', routerLink: '/menu' },
            { label: 'Cupones', routerLink: '/coupons' },
            { label: 'Encuentra tu FastEat', routerLink: '/locations' },
        ];

        this.promotions = [
            { name: 'Sobrados 50% OFF', image: 'assets/images/promo1.jpg', price: '50% OFF', tag: 'LIMITED TIME' },
            { name: 'Burger Olvidada', image: 'assets/images/promo2.jpg', price: '$10.99', tag: 'NEW' },
            { name: 'Combo Familiar', image: 'assets/images/promo3.jpg', price: '$25.99', tag: 'POPULAR' },
        ];

        this.responsiveOptions = [
            { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
            { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
            { breakpoint: '767px', numVisible: 2, numScroll: 1 },
            { breakpoint: '575px', numVisible: 1, numScroll: 1 },
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'LIMITED TIME': return 'danger';
            case 'NEW': return 'success';
            case 'POPULAR': return 'warn';
            default: return 'info';
        }
    }

    // 📌 Función para mostrar el diálogo de login
    showLoginDialog() {
        console.log("Mostrando diálogo de inicio de sesión...");
        this.loginDialogVisible = true;
    }
}