import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/Client.models';
import { Observable, map } from 'rxjs';
import { AuthenticationResponse} from '../models/AuthenticationResponse.models';
import { Admin } from '../models/Admin.models';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  readonly API_URL="http://localhost:8084"
  readonly getcients="/api/v1/auth/getAllClients"
  readonly getclientbyid="/api/v1/auth/getclientById"
  readonly upadteClient="/api/v1/auth/updateClient"
  readonly delete="/api/v1/auth/deleteUser"
  readonly addClient="/api/v1/auth/api/v1/auth/register"
  readonly getNombreClient="/api/v1/auth/nombre"
  readonly login="/api/v1/auth/authenticate"
  readonly getCurrentClient="/api/v1/auth/getCureentClient"
  readonly updateCurrentClient="/api/v1/auth/updateClient"

  

  constructor(private http: HttpClient,private router: Router ) { }
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
  loginUsr(client: Client, admin: Admin): Observable<AuthenticationResponse> {
    let requestData: { client?: Client, admin?: Admin } = {};
  
    if (admin) {
      requestData.admin = admin;
    } else if (client) {
      requestData.client = client;
    }
  
    return this.http.post<AuthenticationResponse>(this.API_URL + this.login, requestData);
  }
  loginUser(client:Client):Observable<AuthenticationResponse>
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
  saveAdmin(admin:Admin,accessToken:string){
    sessionStorage.setItem("admin",JSON.stringify(admin));
    //quand tu ferme le navigateur en sessionstorage tu n'est plus authentié, tu dois refaire le signin
    sessionStorage.setItem("jwt",accessToken);
  }
  logout() {
    // Effacer les informations de session
    sessionStorage.removeItem("client");
    sessionStorage.removeItem("jwt");
    // Rediriger vers la page de connexion ou une autre page appropriée
    // Utilisez la fonctionnalité de routage d'Angular pour rediriger
    this.router.navigate(['/signin']);
  }
  getClientCurrent():Observable<Client>
  {
    return this.http.get<Client>(this.API_URL+this.getCurrentClient)
  }
  updateCurrentClientDetails(clt:Client):Observable<Client> {
    return this.http.put<Client>(this.API_URL+this.updateCurrentClient,clt)
  }


}

