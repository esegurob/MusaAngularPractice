import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';


@Injectable()
export class AuthService
{


    constructor(private datasource:RestDataSource){

    }

    authenticate(username:string,password:string):Observable<boolean>
{
    return this.datasource.authenticate(username,password);
}


// Auth Property Getter only

get authenticated():boolean
{
    return this.datasource.auth_token!=null;

}

// clear it will remove the token from Data Soruce

clear(){
    this.datasource.auth_token=null;

}
}
