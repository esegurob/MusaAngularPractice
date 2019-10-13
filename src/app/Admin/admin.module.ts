import { ProductEditorComponent } from "./ProductEditorComponent";
import { OrderTableComponent } from './OrderTable.component';
import { AuthGuard } from './auth.guard';
// import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { AdminComponent } from "./admin.component";
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './productTable.component';

/*
let routing = RouterModule.forChild
([
    {path:"auth",component:AuthComponent},
    {path:"main",component:AdminComponent,canActivate:[AuthGuard]},
    {path:"**",redirectTo:"auth"}
]);
*/

let routing = RouterModule.forChild([
    {path:"auth",component:AuthComponent},
    {path:"main",component:AdminComponent,canActivate:[AuthGuard],
children:
[
    {path:"products/:mode/:id",component:ProductEditorComponent},
    {path:"products/:mode",component:ProductEditorComponent},
    {path:"products",component:ProductTableComponent},
    {path:"orders",component:OrderTableComponent},
    {path:"**",redirectTo:"products"}
]
},
{path:"**",redirectTo:"auth"}
])
@NgModule
({
    imports:[CommonModule,FormsModule,routing],
    providers:[AuthGuard],
    declarations:[AuthComponent,AdminComponent,ProductEditorComponent,ProductTableComponent,OrderTableComponent],

})

export class AdminModule
{

}