import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name="apple";

  person = {
  	name:"ali",
  	color:"red"
  };

  yell() {
  	alert('I am Yelling!');
  }
}
