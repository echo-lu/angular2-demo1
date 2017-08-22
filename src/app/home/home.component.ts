import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {LoggingService} from '../logging.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LoggingService]
}) 
export class HomeComponent implements OnInit {

  @Input() person;

  @Output() onYell = new EventEmitter();

  clickMe(name:string) {
  	alert("hello!" + name);
  }

  fireYellEvent() {
  	this.onYell.emit();
  }

  constructor(private logger:LoggingService) { }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
  }

}
