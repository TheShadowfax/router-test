import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuardGuard } from './app-guard.guard';
import { AppComponent } from './app.component';
import { Roles } from './roles';

const routes: Routes = [
  // {
  //   path: '', redirectTo:'lazy-one', pathMatch:'full',children: [
  //     { path: 'lazy-one', loadChildren: () => import('./lazy-one/lazy-one.module').then(m => m.LazyOneModule),  },
  //     { path: 'lazy-two', loadChildren: () => import('./lazy-two/lazy-two.module').then(m => m.LazyTwoModule),data: { Role: [Roles.LAZY_TWO] } }
  //   ],
  //   canActivate: [AppGuardGuard], canActivateChild: [AppGuardGuard], canLoad: [AppGuardGuard]
  // },
  // { path: 'lazy-one/sub', loadChildren: () => import('./lazy-one-sub/lazy-one-sub.module').then(m => m.LazyOneSubModule),canActivate: [AppGuardGuard], canActivateChild: [AppGuardGuard], canLoad: [AppGuardGuard], data:{Role:[Roles.LAZY_ONE]} },
  // { path: 'lazy-one', loadChildren: () => import('./lazy-one/lazy-one.module').then(m => m.LazyOneModule), canActivate: [AppGuardGuard], canActivateChild: [AppGuardGuard], canLoad: [AppGuardGuard] },
  // { path: 'lazy-two', loadChildren: () => import('./lazy-two/lazy-two.module').then(m => m.LazyTwoModule), data: { Role: [Roles.LAZY_TWO]},canActivate: [AppGuardGuard], canActivateChild: [AppGuardGuard], canLoad: [AppGuardGuard] },

  { path: 'lazy-one/sub', loadChildren: () => import('./lazy-one-sub/lazy-one-sub.module').then(m => m.LazyOneSubModule), data:{Role:[Roles.LAZY_ONE]} },
  { path: 'lazy-one', loadChildren: () => import('./lazy-one/lazy-one.module').then(m => m.LazyOneModule),  },
  { path: 'lazy-two', loadChildren: () => import('./lazy-two/lazy-two.module').then(m => m.LazyTwoModule), data: { Role: [Roles.LAZY_TWO]}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
