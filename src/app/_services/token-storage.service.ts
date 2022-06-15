import { Injectable } from '@angular/core';
const TOKEN_KEY = 'access-token';
const USER = 'user-name';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  signOut() {
    window.sessionStorage.clear();
    return true;
  }
  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    return true;
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: string) {
    window.sessionStorage.removeItem(USER);
    window.sessionStorage.setItem(USER, user);
    return true;
  }
  public getUser(): string | null {
    return window.sessionStorage.getItem(USER);
  }
}