import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  /**
   * loginWithCredentials
   */
  public loginWithCredentials(username: string, password: string): boolean {
    if (username === 'oahzoug') {
      return true;
    } else {
      return false;
    }
  }

}
