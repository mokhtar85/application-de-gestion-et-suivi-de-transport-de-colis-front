import { Component, OnInit } from '@angular/core';
import { Command } from '../models/Command.models';
import { Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-listecollie',
  templateUrl: './listecollie.component.html',
  styleUrls: ['./listecollie.component.css']
})
export class ListecollieComponent implements OnInit{
  tabCommand:Command[]=[];
constructor(private router:Router,private Commandserv:CommandService){}
ngOnInit(): void {
  this.Commandserv.getAllCommands().subscribe(
    (tabu)=>{
      this.tabCommand=tabu;
      
    }
  )
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300); 
}
updateCmd(id:number){
  this.router.navigate(["/updatecollie",id])
}
deleteCmd(id:number){
  this.Commandserv.deleteCmd(id).subscribe(
    (cmd)=>{
      this.Commandserv.getAllCommands().subscribe(
        (listc)=>{
          this.tabCommand=listc;
          // Naviguer vers la page actuelle pour rafraîchir la page
         
    
        }
       
      )
    }
  )
}
}