import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { Command } from '../models/Command.models';

@Component({
  selector: 'app-updatecollie',
  templateUrl: './updatecollie.component.html',
  styleUrls: ['./updatecollie.component.css']
})
export class UpdatecollieComponent implements OnInit {
  inputform!: FormGroup
  idcolie!:number
constructor(private fb:FormBuilder, private router:Router,private commandserv:CommandService,private actRoute:ActivatedRoute){}
ngOnInit(): void {
  this.inputform=this.fb.group(
    {"inputwieght":["",Validators.required],
    "inputtype":["",Validators.required],
    "inputSize":["",Validators.required],
    "inputCity":["",Validators.required],
    "inputPrice":["",Validators.required],
    "inputDate":["",Validators.required]
  }
  )
  this.actRoute.params.subscribe(
    (param)=>{
      const collieid = param['id'];
      console.log("parametre passer "+collieid)
      this.idcolie=collieid
      this.commandserv.getColliById(collieid).subscribe(
        (cmd)=>{
          console.log(cmd.weight)
          this.inputform.controls['inputwieght'].setValue(cmd.weight)
          this.inputform.controls['inputtype'].setValue(cmd.type)
          this.inputform.controls['inputSize'].setValue(cmd.size)
          this.inputform.controls['inputDate'].setValue(cmd.date)
          this.inputform.controls['inputCity'].setValue(cmd.city)
          this.inputform.controls['inputPrice'].setValue(cmd.price)
         
          
        }
      )
    }
  )
 
}
updateCollie(){
  let cl = new Command();
  cl.weight=this.inputform.controls['inputwieght'].value
  cl.type=this.inputform.controls['inputtype'].value
  cl.size=this.inputform.controls['inputSize'].value
  cl.date=this.inputform.controls['inputDate'].value
  cl.city=this.inputform.controls['inputCity'].value
  cl.price=this.inputform.controls['inputPrice'].value
  this.commandserv.updateclient(this.idcolie,cl).subscribe(
    (altuser)=>{
      console.log(altuser.weight)
      console.log(altuser.type)
    }
  )
  this.router.navigate(['/admin/listecollie'])
 
}
}
