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
  constructor(private http: HttpClient) { }
  getAllCommands():Observable<Command[]>
  {
   return this.http.get<Command[]>(this.API_URL+this.getAllCommand)
  }
}
