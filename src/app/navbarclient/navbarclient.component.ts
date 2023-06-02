import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';

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
constructor(private userservice:UserService){}
ngOnInit(): void {
    
}
afficherSidebarClient(){
  this.showSidenav=!this.showSidenav
  this.showSidenavChange.emit(this.showSidenav)
}

    toggleNavbar() {
        this.isNavbarClicked = !this.isNavbarClicked;
    }
    logout(){
      this.userservice.logout();
      window.location.href = '/signin';
    }
  }