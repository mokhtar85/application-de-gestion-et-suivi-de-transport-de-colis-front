import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transporteur } from '../models/Transporteur.models';

@Injectable({
  providedIn: 'root'
})
export class TransporteurService {
  readonly API_URL="http://localhost:8084"
  readonly getTransporteur="/api/v1/auth/getAllTransporteur"
  readonly getTransporteurById="/api/v1/auth/getTranspById"
  readonly updateTransporteur="/api/v1/auth/updateTrans"
  readonly deleteTransporteur="/api/v1/auth/deleteTrans"
  readonly getnumbertransporters="/api/v1/auth/numbertransporters"
  readonly addtransporter="/api/v1/auth/addTransporteur"
  constructor(private http: HttpClient) { }
  getAllTransporters():Observable<Transporteur[]>{
    return this.http.get<Transporteur[]>(this.API_URL+this.getTransporteur)
  }
  getTransportById(id:number):Observable<Transporteur>{
    return this.http.get<Transporteur>(this.API_URL+this.getTransporteurById+"/"+id)
  }
  updateTransporter(id: number,tr:Transporteur):Observable<Transporteur> {
    return this.http.put<Transporteur>(this.API_URL+this.updateTransporteur+"/"+id,tr)
  }
  deleteTransport(id:number):Observable<number>{
    return this.http.delete<number>(this.API_URL+this.deleteTransporteur+"/"+id)
  }
  getNumberTransporters():Observable<number>{
    return this.http.get<number>(this.API_URL+this.getnumbertransporters)
  }
  addTransporter(transporter:Transporteur):Observable<Transporteur>{
    return this.http.post<Transporteur>(this.API_URL+this.addtransporter,transporter)
  }
}
