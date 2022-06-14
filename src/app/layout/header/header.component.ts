import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login();
    alert('You just logged in');
  }

  onLogout() {
    this.authService.logout();
    alert('You just logged out');
  }
}
