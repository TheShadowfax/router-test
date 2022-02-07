import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, NavigationEnd, NavigationStart, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { AppService } from './app.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private appService: AppService, private router: Router, private authService: AuthService) {
    this.router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe((e: any) => {
      this.appService.addNewLine('');
      this.appService.addNewLine(`Navigating to ` + e?.url ?? '');

    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.appService.addNewLine(`Checking Can Activate Guard`);
    return this.checkRoute(route);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(childRoute.url, state.url, childRoute.data);

    this.appService.addNewLine(`Checking Can Activate Child Guard`);
    return this.checkRoute(childRoute);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.appService.addNewLine(`Checking Can Load Guard`);
    return this.checkRoute(route);
  }

  checkRoute(route: ActivatedRouteSnapshot | Route) {
    
    const nextUrl = route instanceof ActivatedRouteSnapshot ? route.url[0]?.path ?? '' : route?.path ?? '';
    // check for roles
    if (route.data?.['Role']) {
      const hasRoles = this.authService.hasRoles(route.data['Role']);
      this.appService.addNewLine(`${hasRoles ? 'User has all required roles' : 'User doesnt have the required roles'}`);
      if (!hasRoles) return false;
    }
    if(route.data?.['routeRegex']){
      const regeMatch = new RegExp(route.data['routeRegex']).test(nextUrl);
      this.appService.addNewLine(`${regeMatch ? 'Route matched the regex' : 'User did not match the regex'}`);
      if (!regeMatch) return false;
    }
    return true;
  }
}
