import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { TransporteurService } from '../services/transporteur.service';
import { Transporteur } from '../models/Transporteur.models';

@Component({
  selector: 'app-update-transporteur',
  templateUrl: './update-transporteur.component.html',
  styleUrls: ['./update-transporteur.component.css']
})
export class UpdateTransporteurComponent implements OnInit,OnChanges {
  @Input() currentTransporter!:Transporteur
  @Output() closeModal = new EventEmitter<boolean>();
  inputform!:FormGroup
  iduser!:number
  constructor(private transporteurServ:TransporteurService,private fb:FormBuilder,private route:Router){}
  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.currentTransporter)
      this.initTransporter();
  }
  ngOnInit(): void {
    this.inputform=this.fb.group(
      {"inputFirstname":["",Validators.required],
      "inputLastName":["",Validators.required],
     "inputEmail":["",[Validators.required,Validators.email]],
      "inputUsername":["",Validators.required],
      "inputphone":["",Validators.required],
      "inputAddress":["",Validators.required],
      "inputCity":["",Validators.required],
      "inputnImmatricualtion":["",Validators.required],
      "inputCin":["",Validators.required]

     },

    )
    this.initTransporter();
  }
  updateTransporteur(){
    let clt = new Transporteur();
    clt.firstName=this.inputform.controls['inputFirstname'].value
    clt.lastName=this.inputform.controls['inputLastName'].value
    clt.email=this.inputform.controls['inputEmail'].value
    clt.userName=this.inputform.controls['inputUsername'].value
    clt.phone=this.inputform.controls['inputphone'].value
    clt.adress=this.inputform.controls['inputAddress'].value
    clt.city=this.inputform.controls['inputCity'].value
    clt.nImmatricualtion=this.inputform.controls['inputnImmatricualtion'].value
    clt.cin=this.inputform.controls['inputCin'].value

    this.transporteurServ.updateTransporter(this.currentTransporter.id_user,clt).subscribe(
      (altuser)=>{
        console.log("++++++")
        this.closeModal.emit(true);
        let ref = document.getElementById('cancel')
        ref?.click()
      }
    )
    

  }
  initTransporter(){
    const transporteurId = this.currentTransporter?.id_user
    this.transporteurServ.getTransportById(transporteurId).subscribe(
      (usr) => {
        this.inputform.controls['inputFirstname'].setValue(usr.firstName)
        this.inputform.controls['inputLastName'].setValue(usr.lastName)
        this.inputform.controls['inputEmail'].setValue(usr.email)
        this.inputform.controls['inputUsername'].setValue(usr.userName)
        this.inputform.controls['inputphone'].setValue(usr.phone)
        this.inputform.controls['inputAddress'].setValue(usr.adress)
        this.inputform.controls['inputCity'].setValue(usr.city)
        this.inputform.controls['inputnImmatricualtion'].setValue(usr.nImmatricualtion)
        this.inputform.controls['inputCin'].setValue(usr.cin)

      }
    )
  }

}
