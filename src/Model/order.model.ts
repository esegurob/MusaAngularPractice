import { Cart } from 'src/Model/cart.model';
import { Injectable } from '@angular/core';





@Injectable()
export class Order
{
public id:number;
public name:string;
public address: string;
public city : string;
public province : string;
public country: string;
public shipped : boolean;
public zip : string;

constructor(public cart : Cart){
    
}

clear(){
    this.id=null;
    this.name=this.city=this.address=null;
    this.province=this.zip=this.country=null;
    this.shipped=false;
    this.cart.clear();
}

}
