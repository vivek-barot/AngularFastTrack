import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router) { }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
  
  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate(['']);
  }
}
