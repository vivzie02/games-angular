import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenAuthenticatorService } from '../token-authenticator.service';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token') || "";
  const router = inject(Router);
  const authentication = inject(TokenAuthenticatorService);

  if(authentication.authenticate(token)){
    return true;
  }
  else{
    router.navigate(['login']);
    return false;
  }
};
