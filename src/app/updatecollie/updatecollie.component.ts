import { Component, Input, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { Command } from '../models/Command.models';


@Component({
  selector: 'app-updatecollie',
  templateUrl: './updatecollie.component.html',
  styleUrls: ['./updatecollie.component.css']
})
export class UpdatecollieComponent implements OnInit, OnChanges {
  inputform!: FormGroup
  idcolie!: number
  @Input() currentColis!: Command
  @Output() closeModal = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder, private router: Router, private commandserv: CommandService, private actRoute: ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!!this.currentColis) {
      this.initCommand();
    }
  }
  ngOnInit(): void {
    this.inputform = this.fb.group(
      {
        "inputadresseExpedition": ["", Validators.required],
        "inputadresseLivraison": ["", Validators.required],
        "inputtaille": ["", Validators.required],
        "inputPoid": ["", Validators.required],
        "inputnumberProduct": ["", Validators.required],
        "inputDate": ["", Validators.required]
      }
    )
    this.initCommand();

  }
  updateCollie() {
    let cl = new Command();
    cl.adresseExpedition = this.inputform.controls['inputadresseExpedition'].value
    cl.adresseLivraison = this.inputform.controls['inputadresseLivraison'].value
    cl.numberProduct = this.inputform.controls['inputnumberProduct'].value
    cl.date = this.inputform.controls['inputDate'].value
    cl.remarques = this.inputform.controls['inputremarques'].value
    cl.taille = this.inputform.controls['inputtaille'].value
    this.commandserv.updateCommand(this.currentColis.idCmd, cl).subscribe(
      (altuser) => {
        this.closeModal.emit(true);
        let ref = document.getElementById('cancel')
        ref?.click();
      }
    )


  }
  initCommand() {
    const collieId = this.currentColis?.idCmd
    this.commandserv.getColliById(collieId).subscribe(
      (cmd) => {
        this.inputform.controls['inputadresseExpedition'].setValue(cmd.adresseExpedition)
        this.inputform.controls['inputadresseLivraison'].setValue(cmd.adresseLivraison)
        this.inputform.controls['inputnumberProduct'].setValue(cmd.numberProduct)
        this.inputform.controls['inputDate'].setValue(cmd.date)
        this.inputform.controls['inputremarques'].setValue(cmd.remarques)
        this.inputform.controls['inputtaille'].setValue(cmd.taille)


      }
    )
  }
}
