import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productUrl } from '../constant/productConstant';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { product } from '../model/prodt.model';
import { environment } from 'src/environments/environment';
import { Product } from '../state/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get(environment.apiUrl + productUrl)
    .pipe(map((res : any) => res.data));
  }
}
