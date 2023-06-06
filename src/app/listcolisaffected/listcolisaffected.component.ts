import { Component, OnInit } from '@angular/core';
import { Command } from '../models/Command.models';
import { CommandService } from '../services/command.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';




@Component({
  selector: 'app-listcolisaffected',
  templateUrl: './listcolisaffected.component.html',
  styleUrls: ['./listcolisaffected.component.css']
})
export class ListcolisaffectedComponent implements OnInit {
  tabCommandAcceptees: Command[] = [];
  tabCollis:Command[] = [];
  currentPage = 1;
itemsPerPage = 5;
  constructor(private commandServ:CommandService,private http: HttpClient,private userservice:UserService){

  }
    ngOnInit(): void {
      this.getAffectedColis()
      this.getAcceptedColis();
    }
    getAffectedColis(){
      this.commandServ.getAffectedColisToTransporteur().subscribe(
        (colis: Command[]) => {
          this.tabCollis = colis;
          
        }
      );
    }
    getAcceptedColis(): void {
      this.commandServ.getColisAccepted().subscribe(
        (commandesAcceptees: Command[]) => {
          this.tabCommandAcceptees = commandesAcceptees;
        }
      );
    }
    accepterCommande(commande: Command): void {
      this.commandServ.accepterColi(commande.idCmd).subscribe(
        (commandeAcceptee: Command) => {
          this.getAffectedColis();
          this.getAcceptedColis();
          // Supprimer la commande de la table AffectationColis
          this.commandServ.deleteColisAffected(commande.idCmd).subscribe(
            (response: number) => {
              // Supprimer la commande de la liste tabCollis
              this.tabCollis = this.tabCollis.filter(cm => cm.idCmd !== commande.idCmd);
    
              // Actualiser les données des colis affectés et des colis acceptés
              this.getAffectedColis();
              this.getAcceptedColis();
            }
          );
          this.tabCommandAcceptees.push(commandeAcceptee);
        }
      );
    }
    logout(){
      this.userservice.logout();
      
    }
    
    }
    
    
