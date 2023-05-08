import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Client } from '../models/Client.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
  providers:[UserService]
})
export class ListuserComponent implements OnInit {
  public showModal=false;
  usr!: Client
  currentClient!:Client;
  currentPage = 1;
  itemsPerPage = 5;
  tabclients: Client[] = []
  inputform!:FormGroup
  clientModelObj:Client=new Client();
  visibleRows = 5;
  iduser!:number
  clientData!:any;
  previousVisibleRows = 5;
  constructor(private actroute:ActivatedRoute,private userServ:UserService,private fb:FormBuilder,private route:Router){

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
        this.inputform=this.fb.group({
          id_user:[''],
          "inputFirstname":["",Validators.required],
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
        addClientDetails(){
          this.clientModelObj.firstName=this.inputform.value.inputFirstname;
          this.clientModelObj.lastName=this.inputform.value.inputLastName;
          this.clientModelObj.adress=this.inputform.value.inputAddress;
          this.clientModelObj.city=this.inputform.value.inputCity;
          this.clientModelObj.confirmPassword=this.inputform.value.inputPassword;
          this.clientModelObj.password=this.inputform.value.inputPassword;
          this.clientModelObj.email=this.inputform.value.inputEmail;
          this.clientModelObj.phone=this.inputform.value.inputphone;

          this.userServ.addclient(this.clientModelObj).subscribe(
            res=>{
              console.log(res);
              alert("client ajouter avec succes!")
              let ref=document.getElementById('cancel')
              ref?.click()
              this.inputform.reset();
              this.getAllClient();
            },
            err=>{
              console.log("error",err)
              alert("something went wrong!")
            }
          )

        }
 
  deleteuser(id:number){
    this.userServ.deleteClient(id).subscribe(
    (data)=>{
      this.getAllClient();
      console.log("success");
    }
    )
    
    }
    
   
    getAllClient(){
      this.userServ.getAllUsers().subscribe(res=>{
        this.tabclients=res;
        console.log("clientData: ", this.tabclients);
      })
    
    }
  
   

    showMore() {
      this.previousVisibleRows = this.visibleRows; // enregistrer l'état précédent de visibleRows
      this.visibleRows += 10; // charger 10 entrées supplémentaires
    }
    showPrevious() {
      this.visibleRows = this.previousVisibleRows; // rétablir l'état précédent de visibleRows
    } 
    
    public getClient(client : Client){
      console.log(client);
      this.showModal=true;
      this.currentClient=client;
    }
    public closeModal(event:boolean){
      let ref = document.getElementById('cancel')
      ref?.click();
      this.showModal=event;
      this.getAllClient();
    }

}
