import { Component, OnInit } from '@angular/core';
import { OrderRepositry } from 'src/Model/order.repository';
import { Order } from 'src/Model/order.model';
import { NgForm ,RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
  
})
export class CheckoutComponent implements OnInit {
  orderSent:boolean=false;
  submitted:boolean=false;

  constructor( public repository: OrderRepositry, public order: Order) {

   }

  ngOnInit() {
  }

  submitOrder(form :NgForm){

    if(form.valid){
      this.repository.saveOrder(this.order).subscribe(order=>{
        this.orderSent=true;
        this.order.clear();
        this.submitted=false;
      })
    }

  }

}
