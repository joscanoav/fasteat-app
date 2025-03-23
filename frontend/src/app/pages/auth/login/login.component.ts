import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth.service';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, CardModule] 
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    const success = this.authService.login(this.email, this.password);
    if (!success) {
      alert('Error en el inicio de sesión. Verifica tus credenciales.');
    }
  }

  register() {
    console.log('Redirigir a página de registro...');
    // Aquí puedes redirigir a la página de registro, por ejemplo:
    // this.router.navigate(['/register']);
}
}


