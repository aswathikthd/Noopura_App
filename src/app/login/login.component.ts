import { Component, OnInit } from '@angular/core';
import { unwrapResolvedMetadata } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname: string;
  pwd: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
   alert("login");
  }
}
