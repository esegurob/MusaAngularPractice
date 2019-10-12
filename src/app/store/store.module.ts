import { CheckoutComponent } from './../checkout/checkout.component';
// import { SwiperModule } from 'angular2-useful-swiper';
import { ModelModule } from './../../Model/Model.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
// import { SwiperModule } from 'angular2-useful-swiper';
import { SliderModule } from 'angular-image-slider';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { RouterModule } from '@angular/router';


@NgModule({

  imports: [
    BrowserModule,
    ModelModule,
    FormsModule,
    SliderModule,
    RouterModule

  ],
  declarations:
  [
      StoreComponent,
      CartSummaryComponent,
      CheckoutComponent,
      CartDetailsComponent
  ],
  exports:
  [
      StoreComponent,
      CartSummaryComponent,
      CheckoutComponent,
      CartDetailsComponent
  ]
})
export class StoreModule { }
