import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialRoutingModule } from './testimonial-routing.module';
import { TestimonialComponent } from './testimonial.component';


@NgModule({
  declarations: [TestimonialComponent],
  imports: [
    CommonModule,
    TestimonialRoutingModule
  ]
})
export class TestimonialModule { }
