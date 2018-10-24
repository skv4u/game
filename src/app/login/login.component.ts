import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSigninVisible:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle(){
  this.isSigninVisible = !this.isSigninVisible;
  }
}
