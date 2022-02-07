import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyOneSubRoutingModule } from './lazy-one-sub-routing.module';
import { LazyOneSubComponent } from './lazy-one-sub.component';


@NgModule({
  declarations: [
    LazyOneSubComponent
  ],
  imports: [
    CommonModule,
    LazyOneSubRoutingModule
  ]
})
export class LazyOneSubModule { }
