import { Injectable } from '@angular/core';
const MIDDLEWARE_END_POINT = 'http://factorized.bluehoods.co:8090/api/';

@Injectable({
    providedIn: 'root'
  })

export class Env {
    constructor() { }
    AUTH_API() {
        return MIDDLEWARE_END_POINT
    }
}