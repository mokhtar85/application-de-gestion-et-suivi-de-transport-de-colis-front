import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommandService } from '../services/command.service';
import { TransporteurService } from '../services/transporteur.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public nbrclients!:number;
  public nbrcommands!:number;
  public nbrtransporters!:number;
  constructor(private userService:UserService,private commandServ:CommandService,private transportserv: TransporteurService) { }
  ngOnInit(): void {
    this.userService.getNumberUsers().subscribe(
      res => this.nbrclients = res 
  )
  this.commandServ.getnumbercommands().subscribe(
    nb => this.nbrcommands=nb
  )
  this.transportserv.getNumberTransporters().subscribe(
    nbt => this.nbrtransporters=nbt
  )
}
}
