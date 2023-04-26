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
  readonly getTransporteurById="/getTranspById"
  readonly updateTransporteur="/updateTrans"
  readonly deleteTransporteur="/deleteTrans"
  constructor(private http: HttpClient) { }
  getAllTransporters():Observable<Transporteur[]>{
    return this.http.get<Transporteur[]>(this.API_URL+this.getTransporteur)
  }
  getTransportById(id:number):Observable<Transporteur>{
    return this.http.get<Transporteur>(this.API_URL+this.getTransporteurById+"/"+id)
  }
  updateclient(id: number,tr:Transporteur):Observable<Transporteur> {
    return this.http.put<Transporteur>(this.API_URL+this.updateTransporteur+"/"+id,tr)
  }
  deleteTransport(id:number):Observable<Transporteur>{
    return this.http.delete<Transporteur>(this.API_URL+this.deleteTransporteur+"/"+id)
  }
 
}
