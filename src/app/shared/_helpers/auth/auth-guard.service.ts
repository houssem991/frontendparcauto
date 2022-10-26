import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: TokenStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {




    if (this.authService.getToken()) {
  //   this.router.navigate(['/dashboard'], {queryParams: {returnUrl: state.url}});
      console.log('tttt');

      return true;
    } else {

      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;

    }

    // not logged in so redirect to login page with the return url


  }
}
