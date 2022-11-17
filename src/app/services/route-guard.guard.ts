import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token: any = localStorage.getItem('token');
    let tokenPayload: any;
    try {
      tokenPayload = jwt_decode(token);
    } catch (error) {
      localStorage.clear();
      this.router.navigate(['/']);
    }

    if (this.auth.isAuthencated()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
