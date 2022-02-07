import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyOneRoutingModule } from './lazy-one-routing.module';
import { LazyOneComponent } from './lazy-one.component';


@NgModule({
  declarations: [
    LazyOneComponent
  ],
  imports: [
    CommonModule,
    LazyOneRoutingModule
  ]
})
export class LazyOneModule { }
