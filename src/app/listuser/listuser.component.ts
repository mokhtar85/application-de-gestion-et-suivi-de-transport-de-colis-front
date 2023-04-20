import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Client } from '../models/Client.models';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
  providers:[UserService]
})
export class ListuserComponent implements OnInit {
 
  tabclients:Client[]=[];
  visibleRows = 5;
  previousVisibleRows = 5;
  constructor(private router:Router,private userServ:UserService){

  }
  ngOnInit(): void {
      this.userServ.getAllUsers().subscribe(
        (tabu)=>{
          this.tabclients=tabu;
          
        }
        )
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 300);
        
  }
  updateuser(id:number){
    this.router.navigate(["/updateuser",id]);
  }
  deleteuser(id:number){
    this.userServ.deleteclient(id).subscribe(
      (usr)=>{
        this.userServ.getAllUsers().subscribe(
          (listu)=>{
            this.tabclients=listu;
          }
        )
        
      }
    )
    this.router.navigate(["/listuser"])
    }
   

    showMore() {
      this.previousVisibleRows = this.visibleRows; // enregistrer l'état précédent de visibleRows
      this.visibleRows += 10; // charger 10 entrées supplémentaires
    }
    showPrevious() {
      this.visibleRows = this.previousVisibleRows; // rétablir l'état précédent de visibleRows
    }
}
