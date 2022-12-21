import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  uname:String;
  pass:String;

  constructor(private http:HttpClient, private router:Router) { }
  loginForm = new FormGroup({
    uname : new FormControl(''),
    pass : new FormControl('')
  });



  ngOnInit() {
  }
  login(){
    let credentials = {
      uname : this.uname,
      pass : this.pass
    }

    this.http.post('http://localhost:8080/users/login',credentials).subscribe((res)=>{
      console.log(res);
      localStorage.setItem('User',JSON.stringify(res));
      this.router.navigate(['homepage/coinslist']);
    },(err)=>{
      console.log(err);
      alert("Incorrect Credentials.")
    })
  }
}
