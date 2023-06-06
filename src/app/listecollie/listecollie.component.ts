import { Component, OnInit } from '@angular/core';
import { Command } from '../models/Command.models';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { identity } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transporteur } from '../models/Transporteur.models';
import { TransporteurService } from '../services/transporteur.service';

@Component({
  selector: 'app-listecollie',
  templateUrl: './listecollie.component.html',
  styleUrls: ['./listecollie.component.css']
})
export class ListecollieComponent implements OnInit{
  tabtransporteur:Transporteur[]=[];
  currentColis!:Command;
  public showModal=false;
  inputform!: FormGroup
  idcolie!:number
  currentPage = 1;
  itemsPerPage = 5;
  tabCommand:Command[]=[];
  commandModelObj:Command= new Command();
  selectedColisId!: number;
  selectedTransporteurId!: number;
  constructor(private fb:FormBuilder, private router:Router,private commandserv:CommandService,private actRoute:ActivatedRoute,private transpServ:TransporteurService){}
  ngOnInit(): void {
  this.commandserv.getAllCommands().subscribe(
    (tabu)=>{
      this.tabCommand=tabu;
      
    }
  )
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300); 
  this.inputform=this.fb.group(
    {"inputadresseExpedition": ["", Validators.required],
    "inputadresseLivraison": ["", Validators.required],
    "inputtaille": ["", Validators.required],
    "inputPoid": ["", Validators.required],
    "inputnumberProduct": ["", Validators.required],
    "inputDate": ["", Validators.required]
  }
  )
  
    
  
}

deleteCmd(id:number){
  this.commandserv.deleteCmd(id).subscribe(
    (cmd)=>{
      this.getAllCommands()
        
    }
  )
}
 addcollie(){

    this.commandModelObj.adresseExpedition=this.inputform.value.inputadresseExpedition
    this.commandModelObj.adresseLivraison=this.inputform.value.inputadresseLivraison
    this.commandModelObj.numberProduct=this.inputform.value.inputnumberProduct
    this.commandModelObj.date=this.inputform.value.inputDate
    this.commandModelObj.taille=this.inputform.value.inputtaille
    this.commandModelObj.remarques=this.inputform.value.inputremarques
    
    this.commandserv.addcolli(this.commandModelObj).subscribe(
      (res)=>{
        console.log(res);
              alert("client ajouter avec succes!")
              let ref=document.getElementById('cancel')
              ref?.click()
              this.inputform.reset();
              this.getAllCommands();
            },
            err=>{
              console.log("error",err)
              alert("something went wrong!")
            }
    )
    
    }
    getAllCommands(){
      this.commandserv.getAllCommands().subscribe(
        res => this.tabCommand=res
      )
    }
    public closeModal(event:boolean){
      let ref = document.getElementById('cancel')
      ref?.click();
      this.showModal=event;
      this.getAllCommands();
    }
    public getClient(cmd : Command){
   
      this.showModal=true;
      this.currentColis=cmd;
      this.selectedColisId = cmd.idCmd;

    }
    selectTransporteur(transporteur: Transporteur) {
      this.selectedTransporteurId = transporteur.id_user;
    }
    getAllTransporters(){
      this.transpServ.getAllTransporters().subscribe(res=>{
        this.tabtransporteur=res;
        console.log("clientData: ", this.tabtransporteur);
      })
    
    }
    AffecteColisToTransporter(){
      this.commandserv.AffectColisToTransporteur(this.selectedColisId,this.selectedTransporteurId).subscribe(
        (affectationColis) => {
          // Traitez la réponse de l'appel HTTP si nécessaire
          console.log("afffetctaion a:" +this.selectedTransporteurId+this.selectedColisId+" "+affectationColis);
          console.log("*******");
        },
        (error) => {
          // Gérez les erreurs de l'appel HTTP
          console.log(error);
        }
      )
    }
}