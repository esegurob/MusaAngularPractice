import { AuthService } from './../../Model/auth.service';
import { Router } from '@angular/router';
import { Component } from "@angular/core";



//Decorator 
@Component({
    templateUrl:"admin.component.html"
})

export class AdminComponent 
{


    constructor(private Auth:AuthService,private router:Router){

    }
    logout(){
        this.Auth.clear;
        this.router.navigateByUrl("/");

    }
}