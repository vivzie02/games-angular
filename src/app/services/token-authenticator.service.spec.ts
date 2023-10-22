import { TestBed } from '@angular/core/testing';

import { TokenAuthenticatorService } from './token-authenticator.service';

describe('TokenAuthenticatorService', () => {
  let service: TokenAuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenAuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
