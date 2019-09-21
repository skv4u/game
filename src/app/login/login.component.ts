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
    const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
  }
  toggle(){
  this.isSigninVisible = !this.isSigninVisible;
  }
  showHide(flag:boolean){
    this.isSigninVisible = flag;
  }
}
