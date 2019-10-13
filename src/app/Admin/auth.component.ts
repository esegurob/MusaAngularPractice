import {  Component } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/Model/auth.service';


@Component(
    {
        templateUrl:"auth.component.html"
    })

    export class AuthComponent
    {
        public username: string;
        public password: string;
        public errorMessage: string;

        constructor( private router: Router,private auth:AuthService){


        }

        authenticate(form:NgForm)
        {
    if(form.valid)
    {
        this.auth.authenticate(this.username,this.password).subscribe(response=>
            {
                if(response){
                    this.router.navigateByUrl("/Admin/main");
                }
                this.errorMessage="Authentcation Failed";
            })
       

    }
    else
    {
        this.errorMessage="form data invalid"
    }


 }
}

   
