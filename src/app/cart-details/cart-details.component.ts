import { Cart } from 'src/Model/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({

  templateUrl: './cart-details.component.html',

})
export class CartDetailsComponent implements OnInit {

  constructor( public cart:Cart) { }

  ngOnInit() {
  }

}
