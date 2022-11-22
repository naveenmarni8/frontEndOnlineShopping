import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = this._formbuilder.group(
    {
      username: [''],
      password: ['']
    }
  );
  displayLoading = false;
  displayError = false;

  res = false
  submit() {
    this.displayLoading = true;
    //console.log(this.loginForm.value)
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this._backendService.login({ username, password }).subscribe((res) => {
      //console.log('response: '+JSON.stringify(res));
      this.displayLoading = false;
      this._router.navigateByUrl("/home");
    },
      (err) => {
        if (err) {
          //console.log('err ',err);
          localStorage.setItem("displayError", "true");
          this._router.navigateByUrl('/login');
        }
      });


  }
  constructor(private _formbuilder: FormBuilder, private _backendService: BackendService, private _router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem("displayError") === null) {
      this.displayError = false;
    }
    else if (localStorage.getItem("displayError") === "true") {
      this.displayError = true;
    }
    console.log(this.displayError);
  }

  ngOnDestroy() {
    localStorage.setItem("displayError", "false");
  }

}
