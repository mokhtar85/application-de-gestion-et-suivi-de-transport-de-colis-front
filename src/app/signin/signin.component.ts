import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Client } from '../models/Client.models';
import { AuthenticationResponse } from '../models/AuthenticationResponse.models';



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
  this.userservice.loginUser(this.client).subscribe(
    (response: AuthenticationResponse) => {
      console.log('Token:', response.token, "client: ", response.client);
      console.log('Token:', response.token, "admin: ", response.admin);
      if(response.client != null){
      this.userservice.saveClient(response.client,response.token);
      this.route.navigate(['/client/addcollie'])}
      else if(response.admin != null){
        this.userservice.saveAdmin(response.admin,response.token);
        this.route.navigate(['/admin/dashbord'])
      }
      
     
      // Additional logic or display of the token as needed
    },
    (error) => {
      console.error('Error:', error);
      // Handle error response if needed
    }
  


  )
}
}
