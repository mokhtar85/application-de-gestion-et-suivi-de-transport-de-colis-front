import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';



@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit  {
  showNotificationPanel: boolean = false;
  dialogRef!: MatDialogRef<any>;


  constructor(private userservice:UserService, private dialog: MatDialog){
  };
 
  ngOnInit(): void {

  }
  logout(){
    this.userservice.logout();
    
  }
 
  
  toggleNotificationPanel() {
    if (this.showNotificationPanel) {
      this.dialogRef.close();
    } else {
      this.dialogRef = this.dialog.open(NotificationComponent, {
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
  }
}
