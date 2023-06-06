import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Client } from '../models/Client.models';
import { Router } from '@angular/router';
import { AuthenticationResponse } from '../models/AuthenticationResponse.models';
import { Transporteur } from '../models/Transporteur.models';
import { TransporteurService } from '../services/transporteur.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  selectedType: string = 'client';
  inputform!:FormGroup
  constructor(private fb : FormBuilder,private userserv:UserService,private router:Router,private trasnporteur:TransporteurService){

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
         "inputCin":["",Validators.required],
         "inputNImmatriculation":["",Validators.required],
         "inputLicenceNumber":["",Validators.required],
         "inputVihiculetype":["",Validators.required],
         "inputPassword":["", [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).*$/)
        ]],
        "inputPassword2":["",Validators.required]
        },
        {
          validators : this.Mustmatch('inputPassword','inputPassword2')
        }
        
      )
  }
  Mustmatch(controlName: string, matchingControlName:string){
  return( fGroup:FormGroup ) =>{
    const control = fGroup.controls[controlName]
    const matchingControl = fGroup.controls[matchingControlName]
    if(matchingControl.errors && !matchingControl.errors['Mustmatch']){
      return 
    }
    if(control.value !== matchingControl.value){
      matchingControl.setErrors({ Mustmatch: true });
    }
    else{
      matchingControl.setErrors(null)
    }
  }
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
      (response: AuthenticationResponse) => {
        console.log('Token:', response.token, "client: ", response.client);
        // Additional logic or display of the token as needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle error response if needed
      }
    )
    this.router.navigate(["/signin"])
  }
  addTransporteur(){
    let transporter = new Transporteur();
    transporter.firstName=this.inputform.controls['inputFirstname'].value
    transporter.lastName=this.inputform.controls['inputLastName'].value
    transporter.email=this.inputform.controls['inputEmail'].value
    transporter.password=this.inputform.controls['inputPassword'].value
    transporter.confirmPassword=this.inputform.controls['inputPassword2'].value
    transporter.userName=this.inputform.controls['inputUsername'].value
    transporter.phone=this.inputform.controls['inputphone'].value
    transporter.adress=this.inputform.controls['inputAddress'].value
    transporter.city=this.inputform.controls['inputCity'].value
    transporter.nImmatricualtion=this.inputform.controls['inputNImmatriculation'].value
    transporter.cin=this.inputform.controls['inputCin'].value
    transporter.licenseNumber=this.inputform.controls['inputLicenceNumber'].value
    transporter.vehicleType=this.inputform.controls['inputVihiculetype'].value
    this.trasnporteur.addTransporter(transporter).subscribe(
      (response: AuthenticationResponse) => {
        console.log('Token:', response.token, "transporteur: ", response.transporteur);
        // Additional logic or display of the token as needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle error response if needed
      }
    )
    this.router.navigate(["/signin"])
  }
  isTransporteurSelected(): boolean {
    return this.selectedType === 'transporteur';
  }
}
