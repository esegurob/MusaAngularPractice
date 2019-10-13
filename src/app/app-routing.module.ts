import { ActivatedRouteSnapshot } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGuard } from './store/storefirst.guard';


 // {path:"admin",loadChildren:"./Admin/admin.module#AdminModule",
const routes: Routes = [

];

@NgModule({
  imports: [BrowserModule,StoreModule, RouterModule.forRoot(
  [
    {path:'store',component:StoreComponent,canActivate:[StoreFirstGuard]},
    {path:'cart',component:CartDetailsComponent,canActivate:[StoreFirstGuard]},
    {path:'checkout',component:CheckoutComponent,canActivate:[StoreFirstGuard]},
    // {path: 'admin', loadChildren: () => import(`./Admin/admin.module`).then(m => m.AdminModule)},
    { path: 'admin', loadChildren: 'src/app/Admin/admin.module#AdminModule' ,
   canActivate:[StoreFirstGuard]},
    {path:"**",redirectTo:"/store" ,pathMatch: 'full'},
  ])],
  providers:[StoreFirstGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
