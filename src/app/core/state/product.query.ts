import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Product, ProductState } from './product.model';
import { ProductStore } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState, Product> {
  constructor(protected productStore: ProductStore) {
    super(productStore);
  }
}