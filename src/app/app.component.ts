import { AfterViewChecked, Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { AppGuardGuard } from './app-guard.guard';
import { AppService } from './app.service';
import { AuthService } from './auth.service';
import { Roles } from './roles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'roter-gaurd-demo';
  IRoles = Roles;
  roles = Object.keys(Roles).filter(x => !(parseInt(x) >= 0));
  isHome = true;

  @ViewChild('terminal',{static: true})private terminal!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private injector: Injector,public appService: AppService, public authSerivce: AuthService) {
   
   }
  ngAfterViewChecked(): void {
   this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
  }
  routerUrls: any[] = [
    {path:'/lazy-one'},
    {path:'/lazy-one/sub2/asd'},
    {path:'/lazy-two'},
    {path:'/lazy-two/sub-part'}
  ];
  ngOnInit(): void {
    this.router.events.subscribe(e=>{
      if(e instanceof NavigationEnd ){
        if(e.url === '/'){
          this.isHome = true;
        }else{
          console.log(e.url);
          this.isHome = false;
        }
      }
    });
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }

  hasRole(role: string){
    let Roles1 :{[x:string]:any} = <any>Roles;
    return this.authSerivce.hasRoles([Roles1[role]])
  }

  toggleRole(role:string){
    let Roles1 :{[x:string]:any} = <any>Roles;
    const has = this.authSerivce.hasRoles([Roles1[role]]);
    if(has){
      this.authSerivce.removeRole(Roles1[role])
    }else{
      this.authSerivce.addRole(Roles1[role]);
    }
  }

}
