import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _autheservice: AuthService, private _router: Router) {}
  canActivate(): boolean {
    if (this._autheservice.isAuthencated()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
