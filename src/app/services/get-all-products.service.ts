import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {

  constructor(private http: HttpClient) { }
  
  viewProducts()
  {
    console.log("inside viewProducts ");
    return this.http.get<Array<Product>>(environment.APP_SERVICE_URL+'/all').pipe(
      catchError((err:any)=>{
        return throwError("unauthorized");
      })
    );
  }
}
