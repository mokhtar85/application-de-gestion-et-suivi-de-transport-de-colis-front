import { Component, OnInit } from '@angular/core';
import { Transporteur } from '../models/Transporteur.models';
import { Router } from '@angular/router';
import { TransporteurService } from '../services/transporteur.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listtransporteur',
  templateUrl: './listtransporteur.component.html',
  styleUrls: ['./listtransporteur.component.css']
})
export class ListtransporteurComponent implements OnInit {
    public showModal=false;
    currentTransporter!:Transporteur
  tabtransporteur:Transporteur[]=[];
  inputform!:FormGroup
  TransorterModelObj:Transporteur=new Transporteur();
  currentPage = 1;
  itemsPerPage = 5;
 
constructor (private router:Router,private transpServ:TransporteurService,private fb: FormBuilder){}
ngOnInit(): void {
  this.inputform=this.fb.group({
    
    "inputFirstname":["",Validators.required],
    "inputLastName":["",Validators.required],
   "inputEmail":["",[Validators.required,Validators.email]],
   "inputPassword":["",Validators.required],
   "inputPassword2":["",Validators.required],
    "inputUsername":["",Validators.required],
    "inputphone":["",Validators.required],
    "inputAddress":["",Validators.required],
    "inputCity":["",Validators.required],
    "inputnImmatricualtion":["",Validators.required],
    "inputCin":["",Validators.required],

   }

  
  )

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
    (trns)=>{
      this.getAllTransporters();
      console.log("success");
    }
  )
}
addTransporterDetails(){
  this.TransorterModelObj.firstName=this.inputform.value.inputFirstname;
  this.TransorterModelObj.lastName=this.inputform.value.inputLastName;
  this.TransorterModelObj.adress=this.inputform.value.inputAddress;
  this.TransorterModelObj.userName=this.inputform.value.inputUsername;
  this.TransorterModelObj.city=this.inputform.value.inputCity;
  this.TransorterModelObj.confirmPassword=this.inputform.value.inputPassword;
  this.TransorterModelObj.password=this.inputform.value.inputPassword;
  this.TransorterModelObj.email=this.inputform.value.inputEmail;
  this.TransorterModelObj.phone=this.inputform.value.inputphone;
  this.TransorterModelObj.nImmatricualtion=this.inputform.value.inputnImmatricualtion;
  this.TransorterModelObj.cin=this.inputform.value.inputCin;


  this.transpServ.addTransporter(this.TransorterModelObj).subscribe(
    res=>{
      console.log(res);
      alert("client ajouter avec succes!")
      let ref=document.getElementById('cancel')
      ref?.click()
      this.inputform.reset();
      this.getAllTransporters();
    },
    err=>{
      console.log("error",err)
      alert("something went wrong!")
    }
  )

}
getAllTransporters(){
  this.transpServ.getAllTransporters().subscribe(res=>{
    this.tabtransporteur=res;
    console.log("clientData: ", this.tabtransporteur);
  })

}
public getTransporter(transporter : Transporteur){
      console.log(transporter);
      this.showModal=true;
      this.currentTransporter=transporter;
    }
    public closeModal(event:boolean){
      let ref = document.getElementById('cancel')
      ref?.click();
      this.showModal=event;
      this.getAllTransporters();
    }

}
