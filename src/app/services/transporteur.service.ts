import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transporteur } from '../models/Transporteur.models';

@Injectable({
  providedIn: 'root'
})
export class TransporteurService {
  readonly API_URL="http://localhost:8084"
  readonly getTransporteur="/getAllTransporteur"
  constructor(private http: HttpClient) { }
  getAllTransporters():Observable<Transporteur[]>{
    return this.http.get<Transporteur[]>(this.API_URL+this.getTransporteur)
  }
 
}
