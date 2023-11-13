import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor() { }

  login(username: string, password: string): boolean{
    //TO-DO: call to authenticator service 
    //if login is successful, receive an authentication token.
    localStorage.setItem('token', Math.random().toString());
    return true;
  }
}
