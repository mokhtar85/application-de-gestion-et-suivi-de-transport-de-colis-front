import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandService } from '../services/command.service';
import { Command } from '../models/Command.models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addcolie',
  templateUrl: './addcolie.component.html',
  styleUrls: ['./addcolie.component.css'],
})
export class AddcolieComponent implements OnInit {
  inputform!: FormGroup;
  productDetails!: FormArray;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commandserv: CommandService,
    private productServ: ProductService
  ) {}

  ngOnInit(): void {
    this.inputform = this.fb.group({
      adresseExpedition: ['', Validators.required],
      adresseLivraison: ['', Validators.required],
      poid: ['', Validators.required],
      taille: ['', Validators.required],
      date: ['', Validators.required],
      numberProduct: ['', Validators.required],
      remarques: ['', Validators.required],
      produits: this.fb.array([]),
    } )// { updateOn: 'submit' });; // Ajoutez { updateOn: 'submit' } pour retarder la validation jusqu'à la soumission du formulaire
  }
  
  addProduct(): void {
    this.productDetails = this.inputform.get('produits') as FormArray;
    this.productDetails.push(this.generatedRow());
  }

  get products(): FormArray {
    return this.inputform.get('produits') as FormArray;
  }

  generatedRow(): FormGroup {
    return this.fb.group({
      isFragil: [''],
      name: [''],
      type: [''],
      quantity: [1],
    });
  }

  removeProduct(index: number): void {
    const produits = this.inputform.get('produits') as FormArray;
    produits.removeAt(index);
  }

  save(): void {
    if (this.inputform.valid) {
      const command: Command = this.inputform.value;

      this.commandserv.addColis(command).subscribe(
        (savedCommand) => {
          console.log('Colis enregistré avec succès:', savedCommand);
          console.log('........***');

          // Enregistrez les produits individuellement
          command.produits.forEach((product) => {
            this.productServ.addProductToColis(savedCommand.idCmd, product).subscribe(
              (savedProduct) => {
                console.log('Produit enregistré avec succès:', savedProduct);
                // Réinitialisez le formulaire ou effectuez d'autres actions nécessaires
              },
              (error) => {
                console.error('Erreur lors de l\'enregistrement du produit:', error);
              }
            );
          });

          // Réinitialisez le formulaire ou effectuez d'autres actions nécessaires
          this.inputform.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'enregistrement du colis:', error);
        }
      );
    }
  }
}
