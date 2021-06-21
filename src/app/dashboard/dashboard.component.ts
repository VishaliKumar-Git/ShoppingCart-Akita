import { Component, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { product } from '../core/model/prodt.model';
import { Product } from '../core/state/product.model';
import { productService } from '../core/state/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productList$: any;

  constructor(
    private prdStoreService: productService) { }

  ngOnInit() : void {
    this.fetchData();
  }
  

  addToCart(strId: ID) {
      this.prdStoreService.addCartItem(strId);
  }

  fetchData() : void {
    this.productList$ = this.prdStoreService.getProductsList();
  }

  
}
