import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn: boolean = true;

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 200);
    });
  }

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
