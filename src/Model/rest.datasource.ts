import { Cart } from './cart.model';
import  {Injectable} from '@angular/core';

import  {Observable, from} from 'rxjs';
import  {HttpClient, HttpHeaders} from '@angular/common/http';
import { Order } from './order.model';
import { Product } from './product.model';
import {map} from "rxjs/operators";



const PROTOCOL ="http";
const PORT =4210;

@Injectable()
export class RestDataSource
{
    baseUrl:string;
    auth_token:string;
    constructor(private http: HttpClient){
        this.baseUrl=
        `${PROTOCOL}://${location.hostname}:${PORT}/`;

    }

    getProduct():Observable <Product[]>
    {
        return this.http.get<Product[]> (this.baseUrl + "products")
        

    }


    saveOrder(order: Order):Observable<Order>
    {
      return this.http.post<Order> (this.baseUrl + "orders",order)
    }


    authenticate(user:string,pass:string):Observable<boolean>
    {
        return this.http.post<any>(this.baseUrl + "login",
        {
            name:user,
            password:pass
        }).pipe(map(response=>
            {
            this.auth_token=response.success ?
            response.token:null;
            return response.success
        }));
        
            
    }


    //dealing with products and returning observable

    saveProduct(product:Product):Observable<Product>
    {
        return this.http.post<Product>(this.baseUrl + "products",product, this.getOptions());
    }




    // update products

    updateProduct (product) :Observable<Product>
    {
        return this.http.put<Product>
        (`${this.baseUrl}products/${product.id}`,this.getOptions());
    }

    //delete Products

    deleteProduct(id:number):Observable<Product>
    {
        return this.http.delete<Product>
        (`${this.baseUrl}products/${id}`,this.getOptions())
    }

    private getOptions(){
        return{
            headers : new HttpHeaders
            ({
                "Authorization" : `Bearer<${this.auth_token}>`
            })
        }
    }

    // Orders Get , Delete, Update

    getOrder():Observable<Order[]>
    {
        return this.http.get<Order[]>
        (this.baseUrl + "orders",this.getOptions());

    }

    //update orders
    updateOrder(order:Order): Observable<Order>
    {
        return this.http.put<Order>
        (`${this.baseUrl}orders/${order.id}`, this.getOptions())
    }

    //delete order
    deleteOrder(id:number) :Observable<Order>
    {
        return this.http.delete<Order>
        (  `${this.baseUrl}orders/${id}`,this.getOptions())
    }
}
