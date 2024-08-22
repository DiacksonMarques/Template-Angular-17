import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httClient: HttpClient,
  ) { }

  getProducts(): Observable<Product[]>{
    return this.httClient.get<Product[]>(`https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json`);
  }
}
