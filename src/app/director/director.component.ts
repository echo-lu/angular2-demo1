import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css'],
  providers:[LoggingService,DataService]
})
export class DirectorComponent implements OnInit {
  people = [];
  constructor(private logger:LoggingService,private dataService:DataService) { 
  }

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      //处理对应数据
      (data) => this.people = data
    );
  }

}
