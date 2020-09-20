import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  constructor() { 
    var firebaseConfig = {
      apiKey: "AIzaSyA_xM-YRnjB0ixAch6E5hqNyYhGZVPmr9Q",
      authDomain: "cvtech-15f7e.firebaseapp.com",
      databaseURL: "https://cvtech-15f7e.firebaseio.com",
      projectId: "cvtech-15f7e",
      storageBucket: "cvtech-15f7e.appspot.com",
      messagingSenderId: "222804442572",
      appId: "1:222804442572:web:6b57c55b6ad0d2565d3169"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  signup(email: string, pass: string){
    return new Promise(
      (success, reject)=>{
        firebase.auth().createUserWithEmailAndPassword(email, pass).then(
          ()=>{
              success();
          },
          (error)=>{
              reject(error)
          }
        )
      }
  );
  }

  signupTel(tel: string, recap){
    return new Promise(
      (success, echec)=>{
        firebase.auth().signInWithPhoneNumber(tel, recap).then(
          ()=>{
            success();
          },
          (error)=>{
            echec(error)
          }
        )
      }
    );
  }

  signin(email : string, pass : string){

  }
  signout(){
      firebase.auth().signOut();
  }


}
