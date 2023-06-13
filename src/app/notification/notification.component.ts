import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Notification } from '../models/Notification.models';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
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
    this.notificationService.getAllNotification().subscribe(
      (response: Notification[]) => {
        this.notifications = response;
      },
      (error: any) => {
        // Gestion de l'erreur lors de la récupération des notifications
      }
    );
  }
}
