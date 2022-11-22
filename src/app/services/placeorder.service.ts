import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProductDto } from '../dto/product-dto.dto';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  constructor(private _http: HttpClient) { }
  
  placeOrderService(inputFields : {userId:string,productDtoList:Array<ProductDto>})
  {
   const httpHeaders = new HttpHeaders();
    return this._http.post(environment.ORDER_SERVICE_URL+'/order',inputFields,{responseType: 'text'}).pipe(
      catchError((err:any)=>{
        console.log(err);
        return throwError("unauthorized");
      })
    );
  }

}
