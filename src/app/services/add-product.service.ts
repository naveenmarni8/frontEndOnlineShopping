import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Product } from '../model/product.model';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private _http: HttpClient) { }
  addProduct(product:Product)
  {
    console.log('calling addP',product);
    return this._http.post<Product>(environment.APP_SERVICE_URL+'/add',product).pipe(
      catchError((err:any)=>{
        console.log("inside addproduct Service");
        return throwError("unauthorized");
      }
     ));
     
  }
}
