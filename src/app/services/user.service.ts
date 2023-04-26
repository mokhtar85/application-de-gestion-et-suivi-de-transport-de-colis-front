import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly API_URL="http://localhost:8084"
  readonly getcients="/getAllClients"
  readonly getclientbyid="/getclientById"
  readonly upadteClient="/updateClient"
  readonly deleteClient="/deleteUser"
  readonly addClient="/addClientWithoutRole"
  readonly getNombreClient="/nombre"
  readonly login="/login"

  constructor(private http: HttpClient ) { }
  getAllUsers():Observable<Client[]>
  {
   return this.http.get<Client[]>(this.API_URL+this.getcients)
  }
  getClientById(id:number):Observable<Client>
  {
    return this.http.get<Client>(this.API_URL+this.getclientbyid+"/"+id)
  }
  updateclient(iduser: number,clt:Client):Observable<Client> {
    return this.http.put<Client>(this.API_URL+this.upadteClient+"/"+iduser,clt)
  }
  deleteclient(iduser:number):Observable<Client>{
    return this.http.delete<Client>(this.API_URL+this.deleteClient+"/"+iduser)
  }
  addclient(client:Client):Observable<Client>{
    return this.http.post<Client>(this.API_URL+this.addClient,client)
  }
  getNumberUsers():Observable<Client[]>
  {
   return this.http.get<Client[]>(this.API_URL+this.getNombreClient)
  }
  
  


}

