import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Env } from '../config/constants'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private environment: Env) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.environment.AUTH_API() + 'auth/signin', {
      username,
      password
    }, httpOptions);
  }
}