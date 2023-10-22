import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToggleService } from '../services/toggle.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  cardClass: string = "login";
  showImage: boolean = true;
  showPassword: boolean = false;

  constructor(private router: Router, private toggleService: ToggleService, private responsive: BreakpointObserver){}
  
  hideShowPassword(){
    this.showPassword = !this.showPassword;
  }

  login(){
    if(this.loginForm.get('username')?.errors || this.loginForm.get('password')?.errors){
      return;
    }

    //TO-DO: call to authenticator service 
    //if login is successful, receive a authentication token.
    localStorage.setItem('token', Math.random().toString());
    this.router.navigate(['games']);
  }

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        if (result.matches) {
          this.cardClass = "login-handheld";
          this.showImage = false;
        }
        else{
          this.cardClass = "login";
          this.showImage = true;
        }
      });
  }
}
