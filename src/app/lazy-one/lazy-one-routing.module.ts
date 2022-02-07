import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Roles } from '../roles';
import { LazyOneComponent } from './lazy-one.component';

const routes: Routes = [
  { path: '', component: LazyOneComponent, data: { Role: [Roles.LAZY_ONE] } },
  { path: 'sub2/:param1', component: LazyOneComponent, data: { Role: [Roles.LAZY_ONE], routeRegex:'/lazy-one/+d' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyOneRoutingModule { }
