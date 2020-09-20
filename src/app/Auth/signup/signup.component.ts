import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthsService } from 'src/app/Services/auths.service';
import * as firebase from 'firebase';
import { WindowService } from 'src/app/Services/window.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  message : string;
  email : string;
  password : string;
  tel : string;
  windowRef : any;
  response : any;


  constructor(private Auth : AuthsService, private WinDom : WindowService) { 

  }



  Signup(f: NgForm): void{
    this.email = f.value.email;
    this.password = f.value.password;

    this.Auth.signup(this.email, this.password).then(
      ()=>{

      },
      (error)=>{
        this.message = error;
      }
    )
  }

  SignupTel(t: NgForm): void{
    this.tel = t.value.tel;
    alert(this.tel);
    let widgetID = this.windowRef.grecapchat.getResponse(this.response);

    this.Auth.signupTel(this.tel, widgetID).then(
      ()=>{
          this.message = 'inscrit';
      },
      (error)=>{
        this.message = error;
      }
    )
  }

  ngOnInit(): void {
    this.windowRef = this.WinDom.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recap').render().then(
      (response)=>{

        this.response = response;

      },
      (echec)=>{
        this.message = echec;
      }
    )
    
}

}
