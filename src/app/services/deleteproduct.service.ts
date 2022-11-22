import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DeleteproductService {

  constructor(private _http: HttpClient) { }

  deleteproductService(productId:string)
  {
    return this._http.delete<string>(environment.APP_SERVICE_URL+'/delete/'+productId).pipe(
      catchError((err:any)=>{
        console.log("Delete Service Error");
        return throwError("unauthorized");
      })
    );
  }


}
