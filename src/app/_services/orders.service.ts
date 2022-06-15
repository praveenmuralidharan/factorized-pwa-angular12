import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Env } from '../config/constants'
import { TokenStorageService } from './token-storage.service'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient, private environment: Env, private tokenStorage: TokenStorageService) { }
   
  get_orders(): Observable<any> {
    return this.http.get(this.environment.AUTH_API() + 'orders', {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this.tokenStorage.getToken() + "" })
    });
  }
  get_order(id: number): Observable<any> {
    return this.http.get(this.environment.AUTH_API() + 'order/' + id, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'x-access-token': this.tokenStorage.getToken() + "" })
    });
  }
}