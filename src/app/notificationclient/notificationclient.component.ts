import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { HttpClient } from '@angular/common/http';
import { NotificationServiceService } from '../notification-service.service';
import { Notification } from '../models/Notification.models';

@Component({
  selector: 'app-notificationclient',
  templateUrl: './notificationclient.component.html',
  styleUrls: ['./notificationclient.component.css']
})
export class NotificationclientComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NotificationComponent>,
    private http: HttpClient,
    private notificationService: NotificationServiceService
  ) {}

  hasUnreadNotifications: boolean = false; // Variable pour indiquer s'il y a des notifications non lues
  @Output() unreadNotifications: EventEmitter<boolean> = new EventEmitter<boolean>();
  notifications: Notification[] = []; // Utilisez le type Notification importé

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications() {
    // Récupérer les notifications depuis le backend
    this.notificationService.getAllNotificationForClient().subscribe(
      (response: Notification[]) => {
        this.notifications = response;
      },
      (error: any) => {
        // Gestion de l'erreur lors de la récupération des notifications
      }
    );
  }
  

}

