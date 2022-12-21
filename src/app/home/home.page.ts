import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  fname:String;
  lname:String;
  email:String;
  mobile:String;
  uname:String;
  pass:String;

  constructor(private http:HttpClient,private router:Router) {}
  regForm = new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    lname:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email : new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required,Validators.maxLength(13)]),
    uname:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    pass: new FormControl('',[Validators.required,Validators.minLength(8)]),
  });

  get firstname(){
    return this.regForm.get('fname');
  }

  get lastname(){
    return this.regForm.get('lname');
  }

  get emailadd(){
    return this.regForm.get('email');
  }

  get mobilenum(){
    return this.regForm.get('mobile');
  }

  get username(){
    return this.regForm.get('uname');
  }

  get password(){
    return this.regForm.get('pass');
  }

  signedup(){
    let Userdata = {
      fname : this.fname,
      lname : this.lname,
      email : this.email,
      mobile : this.mobile,
      uname : this.uname,
      pass : this.pass,
    }

    this.http.post('http://localhost:8080/users/register',Userdata).subscribe(res=>{
      console.log(res);
      localStorage.setItem('UserData',JSON.stringify(Userdata));
      this.router.navigate(['login']);
    },err =>{
      console.log(err);
      alert('Account is already registered with this email.')
    })
  }
}
