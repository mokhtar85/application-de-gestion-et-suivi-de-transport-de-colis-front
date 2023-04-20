import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../models/Client.models';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{
  //La dépendance ActivatedRoute de Angular est utilisée
  // pour accéder aux informations de route associées à un composant Angular.
  inputform!:FormGroup
  iduser!:number
  constructor(private actroute:ActivatedRoute,private userServ:UserService,private fb:FormBuilder,private route:Router){

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
      "inputCity":[]

     }

    
    )
      
      this.actroute.params.subscribe(
        (param)=>{
          const clientId = param['id'];
          console.log("parametre passer "+clientId)
          this.iduser=clientId
          this.userServ.getClientById(clientId).subscribe(
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
              
            }
          )
        }
      )
  }
  updateclient(){
    let clt = new Client();
    clt.firstName=this.inputform.controls['inputFirstname'].value
    clt.lastName=this.inputform.controls['inputLastName'].value
    clt.email=this.inputform.controls['inputEmail'].value
    clt.password=this.inputform.controls['inputPassword'].value
    clt.confirmPassword=this.inputform.controls['inputPassword2'].value
    clt.userName=this.inputform.controls['inputUsername'].value
    clt.phone=this.inputform.controls['inputphone'].value
    clt.adress=this.inputform.controls['inputAddress'].value
    clt.city=this.inputform.controls['inputCity'].value
    this.userServ.updateclient(this.iduser,clt).subscribe(
      (altuser)=>{
        console.log(altuser.firstName)
        console.log(altuser.lastName)
      }
    )
    this.route.navigate(['/admin/listuser'])

  }

}
