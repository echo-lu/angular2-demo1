import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DirectorComponent } from './director/director.component';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routes';
import { FilterPipe } from './filter.pipe';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DirectorComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
