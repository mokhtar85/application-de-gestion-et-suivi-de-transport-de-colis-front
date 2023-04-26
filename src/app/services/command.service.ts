import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from '../models/Command.models';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  readonly API_URL="http://localhost:8084"
  readonly getAllCommand="/getAllCommands"
  readonly addColli="/addCommand"
  readonly getCollieById="/getCmdById"
  readonly updateCmd="/updateCommand"
  readonly deleteCommand="/deleteCmd"

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
  updateclient(idCmd: number,cl:Command):Observable<Command> {
    return this.http.put<Command>(this.API_URL+this.updateCmd+"/"+idCmd,cl)
  }
  deleteCmd(idCmd: number):Observable<Command> {
    return this.http.delete<Command>(this.API_URL+this.deleteCommand+"/"+idCmd)
  }

}
