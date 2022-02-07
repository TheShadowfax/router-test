import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppGuardGuard } from './app-guard.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    for (const config of this.router.config) {
      config.canActivate = [...config?.canActivate ?? [], AppGuardGuard];
      config.canActivateChild = [...config?.canActivateChild ?? [], AppGuardGuard];
      config.canLoad = [...config?.canLoad ?? [], AppGuardGuard];
    }
  }
}
 