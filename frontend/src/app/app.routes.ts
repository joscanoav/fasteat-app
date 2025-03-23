import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { MenuComponent } from './pages/client/menu/menu.component';
import { CartComponent } from './pages/client/cart/cart.component';
import { ClientOrdersComponent } from './pages/client/orders/orders.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ClientsComponent } from './pages/admin/clients/clients.component';
import { AdminOrdersComponent } from './pages/admin/orders/orders.component';
import { AuthGuard } from './core/auth.guard';
import { AdminLayoutComponent } from './pages/admin/admin-layout/admin-layout.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ClientLayoutComponent } from './pages/client/client-layout/client-layout.component'; // Importa el ClientLayoutComponent

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta por defecto (portada)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Rutas protegidas para clientes (con layout)
  {
    path: 'client',
    component: ClientLayoutComponent, // Usa el ClientLayoutComponent
    canActivate: [AuthGuard],
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'cart', component: CartComponent },
      { path: 'orders', component: ClientOrdersComponent },
    ],
  },

  // Rutas protegidas para admin (con layout)
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'orders', component: AdminOrdersComponent },
      { path: 'clients', component: ClientsComponent },
    ],
  },

  { path: '**', redirectTo: '' } // Redirige a la portada por defecto
];