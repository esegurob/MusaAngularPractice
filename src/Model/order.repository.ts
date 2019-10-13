import { Order } from 'src/Model/order.model';
import { RestDataSource } from './rest.datasource';
// import { StaticDataSource } from './static.datasource';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable()

export class OrderRepositry{

    private orders:Order[]=[];
    private loaded:boolean=false;
    constructor(private dataSource : RestDataSource){

    }

    loadOrders(){
        this.loaded=true;
        this.dataSource.getOrder().subscribe(orders=>this.orders=orders)
    }

    getOrders():Order[]{
        if(!this.loaded)
        { 
        return this.orders;
    }
    }

    saveOrder( Order:Order) :Observable<Order>
    {
        return this.dataSource.saveOrder(Order);

    }


    updateOrder(order: Order){
        this.dataSource.updateOrder(order).subscribe
        (
            order=>{
                this.orders.splice(this.orders.findIndex(o=>o.id==order.id),1,order)
            }
        )
    }

    deleteOrder(id:number){
        this.dataSource.deleteOrder(id)
        .subscribe(order=>{
            this.orders.splice(this.orders.findIndex(o=>o.id==id))
        })
    }
    

}