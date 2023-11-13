import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToggleService } from '../services/toggle.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LoginService } from '../services/login/login.service';

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

  private _cardClass: string = "login";
  private _showImage: boolean = true;
  private _showPassword: boolean = false;

  constructor(private router: Router, private toggleService: ToggleService, private responsive: BreakpointObserver, private loginService: LoginService){}

  get showPassword(): boolean{
    return this._showPassword;
  }
  
  get showImage(): boolean{
    return this._showImage;
  }

  get cardClass(): string{
    return this._cardClass;
  }
  
  hideShowPassword(){
    this._showPassword = !this._showPassword;
  }

  login(){
    if(this.loginForm.get('username')?.errors || this.loginForm.get('password')?.errors){
      return;
    }

    var username = this.loginForm.get('username')?.value || "";
    var password = this.loginForm.get('password')?.value || "";

    this.loginService.login(username, password)
  }

  ngOnInit() {
    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        if (result.matches) {
          this._cardClass = "login-handheld";
          this._showImage = false;
        }
        else{
          this._cardClass = "login";
          this._showImage = true;
        }
      });
  }
}
