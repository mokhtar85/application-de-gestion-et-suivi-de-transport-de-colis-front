import { Component, OnInit } from '@angular/core';
import { Command } from '../models/Command.models';
import { CommandService } from '../services/command.service';
import { AuthenticationResponse } from '../models/AuthenticationResponse.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Client } from '../models/Client.models';
import { Product } from '../models/Product.models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-listcommandclient',
  templateUrl: './listcommandclient.component.html',
  styleUrls: ['./listcommandclient.component.css']
})
export class ListcommandclientComponent implements OnInit {
tabCollis:Command[]=[]
tabProducts:Product[]=[]
client!:Client
authresponse!:AuthenticationResponse;
currentPage = 1;
itemsPerPage = 5;
constructor(private commandServ:CommandService,private http: HttpClient,private clientServ: UserService,private productService:ProductService){

}
ngOnInit(): void {
  
   
      const auth_token =  sessionStorage.getItem('jwt');

  
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
 
    const requestOptions = { headers: headers };
     
    this.http
    .get<Command[]>('http://localhost:8084/api/v1/auth/getColisByClient', requestOptions)
        .subscribe(
          (tabu: Command[])=>{
            this.tabCollis=tabu;
            
          }
        )
  }
  getAllProductsByColisId(colisId: number): void {
    this.productService.getAllProductsByColisId(colisId)
      .subscribe(
        (products: Product[]) => {
          this.tabProducts = products;
        }
      );

}

}
