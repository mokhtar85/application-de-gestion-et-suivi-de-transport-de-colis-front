import { Component, OnInit } from '@angular/core';
import { Command } from '../models/Command.models';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { identity } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listecollie',
  templateUrl: './listecollie.component.html',
  styleUrls: ['./listecollie.component.css']
})
export class ListecollieComponent implements OnInit{
  currentColis!:Command;
  public showModal=false;
  inputform!: FormGroup
  idcolie!:number
  currentPage = 1;
  itemsPerPage = 5;
  tabCommand:Command[]=[];
  commandModelObj:Command= new Command();
  constructor(private fb:FormBuilder, private router:Router,private commandserv:CommandService,private actRoute:ActivatedRoute){}
  ngOnInit(): void {
  this.commandserv.getAllCommands().subscribe(
    (tabu)=>{
      this.tabCommand=tabu;
      
    }
  )
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300); 
  this.inputform=this.fb.group(
    {"inputwieght":["",Validators.required],
    "inputtype":["",Validators.required],
    "inputSize":["",Validators.required],
    "inputCity":["",Validators.required],
    "inputPrice":["",Validators.required],
    "inputDate":["",Validators.required]
  }
  )
  
    
  
}

deleteCmd(id:number){
  this.commandserv.deleteCmd(id).subscribe(
    (cmd)=>{
      this.getAllCommands()
        
    }
  )
}
 addcollie(){

    this.commandModelObj.weight=this.inputform.value.inputwieght
    this.commandModelObj.type=this.inputform.value.inputtype
    this.commandModelObj.size=this.inputform.value.inputSize
    this.commandModelObj.date=this.inputform.value.inputDate
    this.commandModelObj.city=this.inputform.value.inputCity
    this.commandModelObj.price=this.inputform.value.inputPrice
    
    this.commandserv.addcolli(this.commandModelObj).subscribe(
      (res)=>{
        console.log(res);
              alert("client ajouter avec succes!")
              let ref=document.getElementById('cancel')
              ref?.click()
              this.inputform.reset();
              this.getAllCommands();
            },
            err=>{
              console.log("error",err)
              alert("something went wrong!")
            }
    )
    
    }
    getAllCommands(){
      this.commandserv.getAllCommands().subscribe(
        res => this.tabCommand=res
      )
    }
    public closeModal(event:boolean){
      let ref = document.getElementById('cancel')
      ref?.click();
      this.showModal=event;
      this.getAllCommands();
    }
    public getClient(cmd : Command){
   
      this.showModal=true;
      this.currentColis=cmd;
    }
}