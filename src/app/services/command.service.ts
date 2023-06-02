import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from '../models/Command.models';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  readonly API_URL="http://localhost:8084"
  readonly getAllCommand="/api/v1/auth/getAllColis"
  readonly addColli="/api/v1/auth/addCommand"
  readonly getCollieById="/api/v1/auth/getCmdById"
  readonly updateCmd="/api/v1/auth/updateCommand"
  readonly deleteCommand="/api/v1/auth/deleteCmd"
  readonly getnumbercommand="/api/v1/auth/numbercommands"
  readonly getColsiByClientAuth="/api/v1/auth/getColisByClient"
  readonly addcolis="/api/v1/auth/soumettreColis"
  constructor(private http: HttpClient) { }
  getAllCommands():Observable<Command[]>
  {
   return this.http.get<Command[]>(this.API_URL+this.getAllCommand)
  }
  addcolli(cmd:Command):Observable<Command>
  {
    return this.http.post<Command>(this.API_URL+this.addColli,cmd)
  }
  getColliById(id:number):Observable<Command>
  {
    return this.http.get<Command>(this.API_URL+this.getCollieById+"/"+id)
  }
  updateCommand(idCmd: number,cl:Command):Observable<Command> {
    return this.http.put<Command>(this.API_URL+this.updateCmd+"/"+idCmd,cl)
  }
  deleteCmd(idCmd: number):Observable<number> {
    return this.http.delete<number>(this.API_URL+this.deleteCommand+"/"+idCmd)
  }
  getnumbercommands():Observable<number>
  {
   return this.http.get<number>(this.API_URL+this.getnumbercommand)
  }
  getColisWithAuthClient():Observable<Command[]>
  {
   return this.http.get<Command[]>(this.API_URL+this.getColsiByClientAuth)
  }
  addColis(cmd:Command):Observable<Command> 
  {

   return this.http.post<Command>(this.API_URL+this.addcolis,cmd)
  }


}
