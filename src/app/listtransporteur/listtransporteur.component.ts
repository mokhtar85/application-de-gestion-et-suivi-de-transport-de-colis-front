import { Component, OnInit } from '@angular/core';
import { Transporteur } from '../models/Transporteur.models';
import { Router } from '@angular/router';
import { TransporteurService } from '../services/transporteur.service';

@Component({
  selector: 'app-listtransporteur',
  templateUrl: './listtransporteur.component.html',
  styleUrls: ['./listtransporteur.component.css']
})
export class ListtransporteurComponent implements OnInit {
  tabtransporteur:Transporteur[]=[];
  visibleRows = 5;
  previousVisibleRows = 5;
constructor (private router:Router,private transpServ:TransporteurService){}
ngOnInit(): void {
  this.transpServ.getAllTransporters().subscribe(
    (tabt)=>{
      this.tabtransporteur=tabt;
      
    }
    )
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
}
updateTransporteur(id:number){
  this.router.navigate(["/updateTransporteur",id]);
}
deleteTransporteur(id:number){
  this.transpServ.deleteTransport(id).subscribe(
    (cmd)=>{
      this.transpServ.getAllTransporters().subscribe(
        (listc)=>{
          this.tabtransporteur=listc;
        
         
    
        }
       
      )
    }
  )
}
showMore() {
  this.previousVisibleRows = this.visibleRows; // enregistrer l'état précédent de visibleRows
  this.visibleRows += 10; // charger 10 entrées supplémentaires
}
showPrevious() {
  this.visibleRows = this.previousVisibleRows; // rétablir l'état précédent de visibleRows
}
}
