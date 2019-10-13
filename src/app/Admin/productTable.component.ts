import { Product } from './../../Model/product.model';
import { ProductRepository } from './../../Model/product.repository';
import { Component } from "@angular/core";

@Component(
    {
        templateUrl:'productTable.component.html'
    }
)
export class ProductTableComponent
{

    constructor(private repository: ProductRepository){

    }

    getProducts():Product[]{
        
return this.repository.getProducts()
    }

    deleteProduct(id:number)
    {
        this.repository.deleteProduct(id);
    }
}