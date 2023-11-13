import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthenticatorService {

  constructor() { }

  private token: String = "";

  authenticate(token: string): boolean{
    if(token != ""){
      //TO-DO
      //check if token is equal to server side token 
      return true;
    }
    alert("User not logged in or session has timed out");
    return false;
  }

  getToken(): String{
    return this.token;
  }
}
