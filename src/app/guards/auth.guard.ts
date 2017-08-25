import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.service.isLoggedIn().subscribe(isLoggedIn => {
      if (!isLoggedIn) { this.redirectToLogin(state); }
    });

    return this.service.isLoggedIn();
  }

  redirectToLogin(state) {
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  }
}
