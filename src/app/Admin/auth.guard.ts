import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/Model/auth.service';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';



@Injectable()

export class AuthGuard
{
    constructor(private route : Router,private auth: AuthService)
    {
        
    }

    canActive(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):boolean
    {
        if(!this.auth.authenticated)
        {
            this.route.navigateByUrl("/Admin/auth");
            
            return false;
        }
        return true;
    }
}