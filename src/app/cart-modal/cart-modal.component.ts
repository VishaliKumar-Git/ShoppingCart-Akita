import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../core/state/product.model';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit {

  cartList: Product[] = [];
  cartForm: any;

  constructor(public dialogRef: MatDialogRef<CartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cartList = this.data.cartItems;
    this.formInit();
  }

  proceedToPay() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  getTotal() {
    return this.getItem().value.reduce(function(accum: any, item: any) {
      return accum + (item.quantity * item.price) }, 0);
  }


  // FORM FUNCTIONALITIES
  private formInit(): void {
    this.cartForm = this.fb.group({
      items: this.fb.array([])
    });
    if(this.cartList) {
      this.cartList.forEach(prd => this.getItem().push(this.newItem(prd)));
    }
  }

  private getItem(): FormArray {
    return this.cartForm.get("items") as FormArray
  }

  private newItem(product: { id: any; name: any; description: any; price: any; }): FormGroup {
    return this.fb.group({
      id : product.id,
      name : product.name,
      description : product.description,
      price : product.price,
      quantity : 0,
    });
  }


}
