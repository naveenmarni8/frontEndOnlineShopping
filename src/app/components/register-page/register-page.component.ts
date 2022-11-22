import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Signup } from 'src/app/model/signup.model';
import { BackendService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  isRegistered:boolean=false;
  SignUpForm= this._formbuilder.group(
    {
      loginId :[''],
      email   :[''],
      firstName:[''],
      lastName:[''],
      password :[''],
      confirmPassword:[''],
      role:['']
    }
  );
  constructor(private _formbuilder:FormBuilder, private _backendService: BackendService) { }

  ngOnInit(): void {
  }

  register()
  {
    const signup:Signup=this.SignUpForm.value
    //console.log('RegForm: ',signup);
    this._backendService.register(signup).subscribe(
    (res)=>{
      if(res!==null)
      {
        console.log('res ',res);
        this.isRegistered=true;
        
      }
    }
    )
  }

}
