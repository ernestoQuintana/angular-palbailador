import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../products-list/products';

@Component({
  selector: 'app-pal-bailador-cart',
  templateUrl: './pal-bailador-cart.component.html',
  styleUrls: ['./pal-bailador-cart.component.scss']
})
export class PalBailadorCartComponent implements OnInit {

  cartList$: Observable<Product[]>;
  constructor(private cart: ProductCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
