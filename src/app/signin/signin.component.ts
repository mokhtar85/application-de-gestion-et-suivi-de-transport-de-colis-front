import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Client } from '../models/Client.models';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  client = new Client();
  msg="";
constructor(private userservice: UserService, private route:Router){}
ngOnInit(): void {
    
}
loginUser(){
  this.userservice.loginUsr(this.client).subscribe(
    data => {console.log("response received"),
    this.route.navigate(['/admin/dashbord'])
  },
 error =>{
  this.msg="merci de verifier vos information"
 }
  


  )
}
}
