import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UpdateproductService {

  constructor(private _http:HttpClient) { }
  
  updateProductService(productId:string,productQty:number)
  {
    const params=new HttpParams();
                     
    return this._http.put<string>(environment.APP_SERVICE_URL+'/update/'+productId+'/'+productQty,{ params }).pipe(
      catchError((err:any)=>{
        console.log("Update Service Error");
        return throwError("unauthorized");
      })
    );
  }
}
