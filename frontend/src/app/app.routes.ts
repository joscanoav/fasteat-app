import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { MenuComponent } from './pages/client/menu/menu.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { OrdersComponent } from './pages/client/orders/orders.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ClientsComponent } from './pages/admin/clients/clients.component';
import { AuthGuard } from './core/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent },
  {
    path: 'admin',
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
      { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
      { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: '**', redirectTo: 'menu' }
];

