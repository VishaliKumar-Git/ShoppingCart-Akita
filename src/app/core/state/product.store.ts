import { Product, ProductState } from './product.model'; 
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

const initialState = { active: [] };

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'products' })
export class ProductStore extends EntityStore<ProductState, Product> {
  constructor() {
    super(initialState);
  }
}