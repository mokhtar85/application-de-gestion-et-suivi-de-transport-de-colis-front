import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Client } from '../models/Client.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  inputform!:FormGroup
  constructor(private fb : FormBuilder,private userserv:UserService,private router:Router){

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
  }
  addclient(){
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
    this.userserv.addclient(clt).subscribe(
      (clnt)=>{
        console.log(clt.firstName)
      }
    )
    this.router.navigate(["/signin"])
  }
}
