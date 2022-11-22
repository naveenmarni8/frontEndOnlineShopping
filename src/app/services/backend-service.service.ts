import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap, throwError} from 'rxjs';
import { User } from '../model/user.model';
import { environment } from '../../environments/environment.prod';
import { Signup } from '../model/signup.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

 user=new BehaviorSubject<User | null>(null);
 timeout=new Subject<boolean>();
 tokenExpirationTime:any;
  constructor(private _http: HttpClient) { }
  login(inputFields : {username:string, password:string})
  {
   return this._http.post<User>(environment.AUTH_SERVICE_URL+'/login',inputFields).pipe(
    catchError((err:any)=>{
      console.log("helloT");
      return throwError("unauthorized");
    }),
    tap((response) => {
      console.log("response2 "+response);
      this.handleAuthentication(
        response['username'],
        response['token'],
        response['serverCurrentTime'],
        response['tokenExpirationTime']
      );
    }
   ));
     
  }

  register(signupDetails : Signup)
  {
    return this._http.post<User>(environment.AUTH_SERVICE_URL+'/register',signupDetails).pipe(
      catchError((err:any)=>{
        console.log("helloT");
        return throwError("unauthorized");
      })
      
     );
  }

  /*private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'Invalid Username or Password';
    if (errorResponse instanceof HttpErrorResponse) {

      if (errorResponse.status === 401)
      {
        console.log("error2");
         return throwError(errorResponse);
      }
  }
}*/

  private handleAuthentication(
    username: string,
    token: string,
    serverCurrentTime: number,
    tokenExpirationTime: number
  ) {
    const user = new User(
      username,
      token,
      serverCurrentTime,
      tokenExpirationTime
    );
    this.storeUser(user);
    this.autoLogout(tokenExpirationTime - serverCurrentTime);
    this.user.next(user);
  this.user.subscribe((user)=>console.log("userTest "+user));
  }

  private storeUser(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private removeUser() {
    localStorage.removeItem('userData');
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTime = setTimeout(() => {
      this.timeout.next(true);
      this.logout();
    }, expirationDuration);
  }

  logout() {
    this.user.next(null);
    //this.router.navigate(['./auth']);
    this.removeUser();

    if (this.tokenExpirationTime) {
      clearTimeout(this.tokenExpirationTime);
    }
    this.tokenExpirationTime = null;
  }

}
