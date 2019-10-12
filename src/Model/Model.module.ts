import { Order } from './order.model';
import { Cart } from './cart.model';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { OrderRepositry } from './order.repository';
// import {NgModule}  from

@NgModule
({
    providers:[ProductRepository,StaticDataSource,Cart,Order, OrderRepositry]
})
export class ModelModule
{
    
}
