import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class sidenavService {
  isExpanded = true;

  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }

  expandSidenav() {
    this.isExpanded = true;
  }

  collapseSidenav() {
    this.isExpanded = false;
  }
}