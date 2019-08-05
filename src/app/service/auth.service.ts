import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private serv: UserService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.serv.isauth === true) {
      return true;
    } else {
      this.route.navigate(['/auth']);
    }
  }

}
