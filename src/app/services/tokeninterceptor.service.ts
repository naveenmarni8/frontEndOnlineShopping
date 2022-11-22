import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('calling interceptor');
    if(localStorage.getItem('userData')===null) 
    {
      return next.handle(req);
    }
    const updatedReq= req.clone(
      {
        /*setHeaders:{
          Authorization : JSON.parse(localStorage.getItem('userData')  || '')._token
        }*/
        headers: new HttpHeaders({
          Authorization: JSON.parse(localStorage.getItem('userData')  || '')._token
        }),
      }
    );
    return next.handle(updatedReq);
  }
}
