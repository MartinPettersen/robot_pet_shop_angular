import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

 getProducts$(): Observable<ProductCategory>{
    return this.http.get<ProductCategory>('database.json');
 }
}
