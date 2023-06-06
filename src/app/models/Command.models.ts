import { Client } from "./Client.models";
import { Product } from "./Product.models";

export class Command{
  idCmd!:number;
  adresseExpedition!:string;
  adresseLivraison!:string;
  taille!:string;
  poid!:string;
  date!:Date;
  numberProduct!:number;
  remarques!:string;
  produits!: Product[];
  client!:Client;
  acceptee!:boolean;
}