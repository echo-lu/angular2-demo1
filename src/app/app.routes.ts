
import {DirectorComponent} from "./director/director.component";
import {HomeComponent} from "./home/home.component";
import {Routes,RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";


const appRoutes: Routes = [
  {path:'director',component:DirectorComponent},
  {path:'',component:HomeComponent}
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);