import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client.models';
import { Observable } from 'rxjs';
import { AuthenticationResponse} from '../models/AuthenticationResponse.models';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly API_URL="http://localhost:8084"
  readonly getcients="/getAllClients"
  readonly getclientbyid="/getclientById"
  readonly upadteClient="/updateClient"
  readonly delete="/deleteUser"
  readonly addClient="/api/v1/auth/register"
  readonly getNombreClient="/nombre"
  readonly login="/api/v1/auth/authenticate"

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
  deleteClient(iduser:number):Observable<number>{
    return this.http.delete<number>(this.API_URL+this.delete+"/"+iduser)
  }
  /*addclient(client:Client):Observable<Client>{
    return this.http.post<Client>(this.API_URL+this.addClient,client)
  }*/
  getNumberUsers():Observable<number>
  {
   return this.http.get<number>(this.API_URL+this.getNombreClient)
  }
  loginUsr(client:Client):Observable<AuthenticationResponse>
  {
    return this.http.post<AuthenticationResponse>(this.API_URL+this.login,client)
  }
  addclient(client:Client):Observable<AuthenticationResponse>{
    return this.http.post<AuthenticationResponse>(this.API_URL+this.addClient,client)
  }
  saveClient(client:Client,accessToken:string){
    sessionStorage.setItem("client",JSON.stringify(client));
    //quand tu ferme le navigateur en sessionstorage tu n'est plus authentié, tu dois refaire le signin
    sessionStorage.setItem("jwt",accessToken);
  }
  logout(){
    sessionStorage.clear();
  }


}

