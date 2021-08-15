import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouteList } from './route-list';

@Injectable({
  providedIn: 'root'
})
export class RouteConfigService {
  routeList = RouteList;
  nextRoute = '';

  currentRoute = 0;

  constructor(
    private router: Router
  ) { }

  next(){
    if (this.currentRoute < this.routeList.length - 1) {
      this.currentRoute += 1;
      this.router.navigate([this.routeList[this.currentRoute]])
    } else {
      this.currentRoute = 0;
      this.router.navigate([this.routeList[this.currentRoute]])
    }
  }

  prev(){
    if (this.currentRoute == 0) {
      this.currentRoute = this.routeList.length;
      this.router.navigate([this.routeList[this.currentRoute - 1]])
    }
    this.currentRoute -= 1;
    this.router.navigate([this.routeList[this.currentRoute]])
  }
}
