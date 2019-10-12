import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable()

export class OrderRepositry{

    private orders:Order[]=[];
    constructor(private dataSource : StaticDataSource){

    }

    getOrders():Order[]{
        return this.orders;
    }

    saveOrder( Order:Order) :Observable<Order>
    {
        return this.dataSource.saveOrder(Order);

    }


}