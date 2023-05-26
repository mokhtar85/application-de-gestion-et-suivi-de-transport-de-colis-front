import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product.models';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8084';
  private addProductEndpoint = '/api/v1/auth/produits';

  constructor(private http: HttpClient) {}

  addProductToColis(colisId: number, product: Product,): Observable<Product>
  {
   
    
    const url = `${this.apiUrl}${this.addProductEndpoint}/${colisId}`;
    return this.http.post<Product>(url, product);
  }
}

