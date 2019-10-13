import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource
{
    private products: Product[]=[
        new Product(1,"Men Gara","Category 1","Gara Cloths(Category 1)",2000),
        new Product(2,"T-Shert","Category 1","Sport T-Shirt High Quality(Category 1)",1000),
        new Product(3,"Salone CountryCloths","Category 2","Roko Cloths Cloths(Category 2)",2000),
        new Product(4,"Vegatables","Category 3","Fruits (Category 3)",500),
        new Product(5,"Music EDC Ml","Category 4","Entain(Category 4)",9000),
        new Product(6,"Africana","Category 1","Gara Cloths(Category 1)",2000),
        new Product(7,"Africana","Category 1","Gara Cloths(Category 1)",4000),
        new Product(8,"Africana","Category 3","Gara Cloths(Category 1)",1000),
        new Product(9,"Africana","Category 1","Gara Cloths(Category 1)",600000),
        new Product(10,"Africana","Category 1","Gara Cloths(Category 1)",2000),
        new Product(11,"Laptop","Electonic","Electonic(Category 5)",2000),
        new Product(11,"Tablet","Electonic","Electonic(Category 5)",900000),
    ];

    getProducts():Observable<Product[]>
    {
        return from ([this.products])

    }


    saveOrder( Order:Order):Observable<Order>{
        console.log(JSON.stringify(Order))
        return from ([Order])

    }


}