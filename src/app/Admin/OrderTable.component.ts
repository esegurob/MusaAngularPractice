
import { Order } from './../../Model/order.model';
import { OrderRepositry } from './../../Model/order.repository';
import { Component } from "@angular/core";

@Component(
    {
        templateUrl:'OrderTable.component.html'
    }
)
export class OrderTableComponent
{

        includeShipped=false;
        constructor(private repository : OrderRepositry)
        {

        }

        //get Orders

        getOrders(): Order[]
        {
            return this.repository.getOrders()
            .filter(o=>this.includeShipped || !o.shipped)
        }


        // marks Shipped


        markShipped(order: Order)
        {
            order.shipped=true;
            this.repository.updateOrder(order);
        }

        delete(id:number)
        {
            this.repository.deleteOrder(id);
        }
}