import { Injectable } from "@angular/core";
import { ID } from "@datorama/akita";
import { Observable } from "rxjs";
import { createPrd, Product } from "./product.model";
import { ProductQuery } from "./product.query";
import { ProductStore } from "./product.store";

@Injectable({
    providedIn: 'root'
})
export class productService {

    constructor(private productStore: ProductStore,
        private productQuery: ProductQuery) {
    }

    // OPERATIONS ON PRODUCT STATE
    addProductsList(product: Product) {
        const productObj = createPrd(product);
        this.productStore.add({ ...productObj });
    }

    updateProductsList(id: ID, product: Product) {
        this.productStore.update(id, product);
    }

    deleteProductsList(id: ID) {
        this.productStore.remove(id);
    }

    getProductsList() {
        return this.productQuery.selectAll();
    }

    getProductByID(id: ID) {
        return this.productQuery.selectEntity(id);
    }

    // OPERATIONS ON ACTIVE PRODUCT STATE
    addCartItem(id: ID) {
        if(this.productQuery.hasActive()) {
            this.productStore.addActive(id);
        } else {
            this.productStore.setActive([id]);
        }
        
    }

    getCartItemList() {
        console.log(this.productQuery.selectCount);
        return this.productQuery.selectActive();
    }


}