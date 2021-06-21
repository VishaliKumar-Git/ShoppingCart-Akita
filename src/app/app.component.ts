import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductAPIService } from './core/services/productApi.service';
import { productService } from './core/state/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, OnDestroy {
  
  title = 'shoppingcart';
  private destroy$ = new Subject();

  constructor(private prdAPIService: ProductAPIService,
    private prdStoreService: productService) {}

  ngOnInit() : void {
    this.fetchData();
  }

  fetchData() : void {
    this.prdAPIService.getProducts()
    .pipe(takeUntil(this.destroy$))
    .subscribe(products => {
      products.forEach(product => {
        this.prdStoreService.addProductsList(product);
      })
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
}
