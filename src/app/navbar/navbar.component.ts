import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  flag:boolean;
  username:string = "";
  password:string = "";
  msg:string = "Login";
  constructor() {
  	this.flag = false;
   }

   loginInfo() {
   	if(this.username === "1" && this.password === "1") {
   		 this.flag = true;
   		 this.msg = "Logout";
   		alert("Welcome!")
   	}else {
   		alert("Something Wrong!")
   	}
   }
   logout() {
   	alert("Bye")
   	this.flag = false;
   }

  ngOnInit() {
  }

}
