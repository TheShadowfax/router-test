import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Roles } from '../roles';
import { LazyTwoComponent } from './lazy-two.component';

const routes: Routes = [
  {
    path: '', component: LazyTwoComponent,
    data:{Role:[Roles.LAZY_TWO]},
    children: [
      { path: 'sub-part', component: LazyTwoComponent,data:{Role:[Roles.LAZY_TWO_SUB_PART]} },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTwoRoutingModule { }
