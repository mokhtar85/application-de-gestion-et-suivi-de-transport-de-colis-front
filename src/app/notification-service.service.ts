import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from './models/Notification.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  readonly API_URL="http://localhost:8084"
  readonly notification="/api/v1/auth/notifications"
  readonly notificationClient="/api/v1/auth/notificationclient"
  constructor(private http: HttpClient,private router: Router ) { }
  getAllNotification():Observable<Notification[]>
  {
   return this.http.get<Notification[]>(this.API_URL+this.notification)
  }
  getAllNotificationForClient():Observable<Notification[]>
  {
   return this.http.get<Notification[]>(this.API_URL+this.notificationClient)
  }
}
