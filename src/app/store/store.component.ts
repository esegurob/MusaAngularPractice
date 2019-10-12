import { Router } from '@angular/router';
import { Product } from './../../Model/product.model';
import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../../Model/product.repository';
import { Cart } from 'src/Model/cart.model';

// import { SwiperModule } from 'angular2-useful-swiper'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public imagesUrl;
public productsPerPage=4;
public selectedPage=1;

  public selectedCategory=null;

  constructor( private repository:ProductRepository,private cart : Cart,private router: Router) { }


  ngOnInit() {
    this.imagesUrl = [
      'assets/img/home.png',
      'assets/downsize_200k_v1.jpg',
      'src/assets/img/home.png',
    ]
  }

  get Products():Product[]
  {
    // return  this.repository.getProducts();
    let pageIndex=(this.selectedPage-1 )* this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
    .slice(pageIndex,pageIndex + this.productsPerPage);

  }

  get Categories():string[]
  {
    return this.repository.getCategories();
  }

changeCategory( newCategory?:string){
  this.selectedCategory=newCategory;
}
 changePage(newPage:number){
   this.selectedPage=newPage;
 }
 changePageSize(newSize:number){
   this.productsPerPage=Number(newSize);
   this.changeCategory();
 }

 get PageNumbers():number[]
 {
   return Array(Math.ceil(this.repository
    .getProducts(this.selectedCategory).length/this.productsPerPage
    ))
    .fill(0).map((x,i)=>i+1);
   }


   addProductToCart(product:Product){
     this.cart.addLine(product);
     this.router.navigateByUrl("/cart")
   }

   
}
