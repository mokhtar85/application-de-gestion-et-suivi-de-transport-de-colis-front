import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  inputform!:FormGroup;//c'est pour lier le formulaire avec le ts.
  //formbuilder:permet d'affecter le composant d'un formulaire au nivau de formgroup
  //l'injection des dépandances : le syteme prepare l'objet pour toi (par exemple l'objet etudiant) il suffit d'injecter
  //les dependance au niveau de constructeur
  constructor(private fb : FormBuilder, private route:Router){

  }
  ngOnInit(): void{

    this.inputform=this.fb.group(
      {"inputemail":["",[Validators.required,Validators.email]],
        "inputpassword":["",Validators.required]
      }
    )
  }
  onsubmit(){
    console.log(this.inputform);
    console.log(this.inputform.controls['inputemail'].value);
    console.log(this.inputform.controls['inputpassword'].value);
    if(this.inputform.valid)
    {
      console.log("formulaire valide !!")
      this.route.navigate(['/admin/dashbord'])
    }
    else{
      console.log("formulaire non valide!!!")
    }
  }

}
