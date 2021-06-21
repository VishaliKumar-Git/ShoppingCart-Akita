import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../state/product.model';
import { productService } from '../../state/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  cartList: Product[] = [];
  private destroy$ = new Subject();

  constructor(private prdStoreService: productService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadCartCount();
  }

  async viewCart() {
    if (!this.getCartCount()) {
      return;
    }
    const { CartModalComponent } = await import('../../../cart-modal/cart-modal.component');
    const dialogRef = this.dialog.open(CartModalComponent, {
      width: '550px',
      data: { cartItems: this.cartList }
    });
  }

  private loadCartCount() {
    this.prdStoreService.getCartItemList()
    .pipe(takeUntil(this.destroy$))
    .subscribe(cartItem => {
      this.cartList = cartItem;
    });
  }

  getCartCount = () => {
    return this.cartList ? this.cartList.length : 0;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
