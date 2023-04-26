import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { TransporteurService } from '../services/transporteur.service';
import { Transporteur } from '../models/Transporteur.models';

@Component({
  selector: 'app-update-transporteur',
  templateUrl: './update-transporteur.component.html',
  styleUrls: ['./update-transporteur.component.css']
})
export class UpdateTransporteurComponent implements OnInit {
  inputform!:FormGroup
  iduser!:number
  constructor(private actroute:ActivatedRoute,private transporteurServ:TransporteurService,private fb:FormBuilder,private route:Router){

  }
  ngOnInit(): void {
    this.inputform=this.fb.group(
      {"inputFirstname":["",Validators.required],
      "inputLastName":["",Validators.required],
     "inputEmail":["",[Validators.required,Validators.email]],
     "inputPassword":["",Validators.required],
     "inputPassword2":["",Validators.required],
      "inputUsername":["",Validators.required],
      "inputphone":[""],
      "inputAddress":[],
      "inputCity":[],
      "inputnImmatricualtion":["",Validators.required],
      "inputCin":["",Validators.required]

     },

     this.actroute.params.subscribe(
      (param)=>{
        const transId = param['id'];
        console.log("parametre passer "+transId)
        this.iduser=transId
        this.transporteurServ.getTransportById(transId).subscribe(
          (usr)=>{
            console.log(usr.firstName)
            this.inputform.controls['inputFirstname'].setValue(usr.firstName)
            this.inputform.controls['inputLastName'].setValue(usr.lastName)
            this.inputform.controls['inputEmail'].setValue(usr.email)
            this.inputform.controls['inputPassword'].setValue(usr.password)
            this.inputform.controls['inputPassword2'].setValue(usr.confirmPassword)
            this.inputform.controls['inputUsername'].setValue(usr.userName)
            this.inputform.controls['inputphone'].setValue(usr.phone)
            this.inputform.controls['inputAddress'].setValue(usr.adress)
            this.inputform.controls['inputCity'].setValue(usr.city)
            this.inputform.controls['inputnImmatricualtion'].setValue(usr.nImmatricualtion)
            this.inputform.controls['inputCin'].setValue(usr.cin)
            
          }
        )
      }
    )

    
    )
  }
  updateTransporteur(){
    let clt = new Transporteur();
    clt.firstName=this.inputform.controls['inputFirstname'].value
    clt.lastName=this.inputform.controls['inputLastName'].value
    clt.email=this.inputform.controls['inputEmail'].value
    clt.password=this.inputform.controls['inputPassword'].value
    clt.confirmPassword=this.inputform.controls['inputPassword2'].value
    clt.userName=this.inputform.controls['inputUsername'].value
    clt.phone=this.inputform.controls['inputphone'].value
    clt.adress=this.inputform.controls['inputAddress'].value
    clt.city=this.inputform.controls['inputCity'].value
    clt.nImmatricualtion=this.inputform.controls['inputnImmatricualtion'].value
    clt.cin=this.inputform.controls['inputCin'].value

    this.transporteurServ.updateclient(this.iduser,clt).subscribe(
      (altuser)=>{
        console.log(altuser.firstName)
        console.log(altuser.lastName)
      }
    )
    this.route.navigate(['/admin/listTransporteur'])

  }

}
