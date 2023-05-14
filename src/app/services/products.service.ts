import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  LINK_URL: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get<Product[]>(this.LINK_URL)
  }
}
