import { AuthService } from './auth.service';
import { Order } from './order.model';
import { Cart } from './cart.model';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { OrderRepositry } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';

// import {NgModule}  from

@NgModule
({
imports:[HttpClientModule],

    providers:[ProductRepository,StaticDataSource,Cart,Order, OrderRepositry,
    {
        provide:StaticDataSource,useClass:RestDataSource
    },
    RestDataSource,AuthService
    ]
})
export class ModelModule
{
    
}
