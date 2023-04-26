import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { Command } from '../models/Command.models';

@Component({
  selector: 'app-addcolie',
  templateUrl: './addcolie.component.html',
  styleUrls: ['./addcolie.component.css']
})
export class AddcolieComponent implements OnInit {
  inputform!: FormGroup
constructor(private fb:FormBuilder, private router:Router,private commandserv:CommandService){}
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

}
addcollie(){
let cl = new Command();
cl.weight=this.inputform.controls['inputwieght'].value
cl.type=this.inputform.controls['inputtype'].value
cl.size=this.inputform.controls['inputSize'].value
cl.date=this.inputform.controls['inputDate'].value
cl.city=this.inputform.controls['inputCity'].value
cl.price=this.inputform.controls['inputPrice'].value

this.commandserv.addcolli(cl).subscribe(
  (cll)=>{
    console.log(cl.weight)
     this.inputform.reset();
      // Réinitialiser les valeurs des FormControl à vide
      Object.keys(this.inputform.controls).forEach(key => {
        this.inputform.controls[key].setValue('');
        this.inputform.controls[key].markAsUntouched();
      });
  }
)
this.router.navigate(["/addcollie"])
}
}
