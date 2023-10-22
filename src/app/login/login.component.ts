import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToggleService } from '../services/toggle.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LoginService } from '../services/login.service';

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

  constructor(private router: Router, private toggleService: ToggleService, private responsive: BreakpointObserver, private loginService: LoginService){}
  
  hideShowPassword(){
    this.showPassword = !this.showPassword;
  }

  login(){
    if(this.loginForm.get('username')?.errors || this.loginForm.get('password')?.errors){
      return;
    }

    var username = this.loginForm.get('username')?.value || "";
    var password = this.loginForm.get('password')?.value || "";

    if(this.loginService.login(username, password)){
      this.router.navigate(['games']);
    }
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
