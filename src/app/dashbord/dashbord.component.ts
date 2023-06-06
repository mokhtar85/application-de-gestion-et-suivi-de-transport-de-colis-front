import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit  {
 
  constructor(private userservice:UserService){
  };
 
  ngOnInit(): void {

  }
  logout(){
    this.userservice.logout();
    
  }
}
