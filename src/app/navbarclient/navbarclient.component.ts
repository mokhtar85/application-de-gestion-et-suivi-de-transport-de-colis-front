import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationclientComponent } from '../notificationclient/notificationclient.component';

@Component({
  selector: 'app-navbarclient',
  templateUrl: './navbarclient.component.html',
  styleUrls: ['./navbarclient.component.css']
})
export class NavbarclientComponent implements OnInit {
@Input()
showSidenav!:boolean;
isNavbarClicked = false;
showNotificationPanel: boolean = false;
dialogRef!: MatDialogRef<any>;

@Output()
showSidenavChange: EventEmitter<boolean>=new EventEmitter<boolean>();
constructor(private userservice:UserService, private dialog: MatDialog){}
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
      
    }
  
  toggleNotificationPanel() {
    if (this.showNotificationPanel) {
      this.dialogRef.close();
    } else {
      this.dialogRef = this.dialog.open(NotificationclientComponent, {
        width: '400px',
        height: '300px',
        position: {
          top: '64px',
          right: '16px'
        }
      });
    }
    this.showNotificationPanel = !this.showNotificationPanel;
  }
  hasUnreadNotifications: boolean = false;

  handleUnreadNotifications(hasUnreadNotifications: boolean) {
    this.hasUnreadNotifications = hasUnreadNotifications;
  }  }