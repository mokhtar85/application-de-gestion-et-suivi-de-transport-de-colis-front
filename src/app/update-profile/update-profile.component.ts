import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../models/Client.models';
import { UserService } from '../services/user.service';
import { AuthenticationResponse } from '../models/AuthenticationResponse.models';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  inputform!: FormGroup;
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userServ: UserService,
   
  ) {}

  ngOnInit(): void {
    this.inputform = this.fb.group({
      firstName: ['',],
      lastName: ['', ],
      userName: ['', ],
      adress: ['', ],
      city: ['', ],
      phone: ['', ],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).*$/)
      ]],
      confirmPassword: ['',],
    },
    {
      validators : this.Mustmatch('password','confirmPassword')
    } )
    this.initClient();
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
    updateclient() {
      let clt = new Client();
      clt.firstName = this.inputform.controls['firstName'].value
      clt.lastName = this.inputform.controls['lastName'].value
      clt.password = this.inputform.controls['password'].value
      clt.confirmPassword = this.inputform.controls['confirmPassword'].value
      clt.userName = this.inputform.controls['userName'].value
      clt.phone = this.inputform.controls['phone'].value
      clt.adress = this.inputform.controls['adress'].value
      clt.city = this.inputform.controls['city'].value
      this.userServ.updateCurrentClientDetails(clt).subscribe(
        (altuser) => {
        }
      )
      this.inputform.reset();
  
    }
    public initClient() {

      
      this.userServ.getClientCurrent().subscribe(
        (usr) => {
          console.log(usr.firstName)
          this.inputform.controls['firstName'].setValue(usr.firstName)
          this.inputform.controls['lastName'].setValue(usr.lastName)
          this.inputform.controls['userName'].setValue(usr.userName)
          this.inputform.controls['phone'].setValue(usr.phone)
          this.inputform.controls['adress'].setValue(usr.adress)
          this.inputform.controls['city'].setValue(usr.city)
  
        }
      )
}
}
