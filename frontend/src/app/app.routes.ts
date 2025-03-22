import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { MenuComponent } from './pages/client/menu/menu.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { ClientOrdersComponent } from './pages/client/orders/orders.component'; // Cambiado a ClientOrdersComponent
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ClientsComponent } from './pages/admin/clients/clients.component';
import { AdminOrdersComponent } from './pages/admin/orders/orders.component'; // Nuevo componente para órdenes de admin
import { AuthGuard } from './core/auth.guard';
import { AdminLayoutComponent } from './pages/admin/admin-layout/admin-layout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: ClientOrdersComponent }, // Ruta para órdenes del cliente
  {
    path: 'admin',
    component: AdminLayoutComponent,  // Usa el layout para las páginas del admin
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
      { path: 'orders', component: AdminOrdersComponent, canActivate: [AuthGuard] }, // Ruta para órdenes del administrador
      { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: '**', redirectTo: 'menu' } // Ruta por defecto
];
