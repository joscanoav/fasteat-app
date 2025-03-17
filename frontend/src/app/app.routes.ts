import { Routes } from '@angular/router';
// import { RegisterComponent } from './pages/auth/register.component';
// import { MenuComponent } from './pages/client/menu.component';
// import { CartComponent } from './pages/client/cart.component';
// import { OrdersComponent } from './pages/client/orders.component';
// import { DashboardComponent } from './pages/admin/dashboard.component';
// import { ProductsComponent } from './pages/admin/products.component';
// import { OrdersAdminComponent } from './pages/admin/orders.component';
// import { ClientsComponent } from './pages/admin/clients.component';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'menu', component: MenuComponent },
//   { path: 'cart', component: CartComponent },
//   { path: 'orders', component: OrdersComponent },
  {
    path: 'admin',
    children: [
    //   { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    //   { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
    //   { path: 'orders', component: OrdersAdminComponent, canActivate: [AuthGuard] },
    //   { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: '**', redirectTo: 'menu' }
];
