import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,
    PasswordModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MessageModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

   email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/product']),
      error: (err) => {
        this.error = err.error?.error || 'Login failed';
      },
    });
  
  }
}
