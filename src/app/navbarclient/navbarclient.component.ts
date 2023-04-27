import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbarclient',
  templateUrl: './navbarclient.component.html',
  styleUrls: ['./navbarclient.component.css']
})
export class NavbarclientComponent implements OnInit {
@Input()
showSidenav!:boolean;
isNavbarClicked = false;
@Output()
showSidenavChange: EventEmitter<boolean>=new EventEmitter<boolean>();
constructor(){}
ngOnInit(): void {
    
}
afficherSidebarClient(){
  this.showSidenav=!this.showSidenav
  this.showSidenavChange.emit(this.showSidenav)
}



    toggleNavbar() {
        this.isNavbarClicked = !this.isNavbarClicked;
    }
  }