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

  productList$: Observable<Product[]>;
  total$ = 0;
  

  constructor(private cart: ProductCartService) {
    this.productList$ = cart.cartList.asObservable();
    this.productList$.subscribe((products)=> {
     //esta es la forma declarativa (magia)
    // this.total$ =  products.map((p)=>p.quantity*p.precio).reduce((acc,p)=>acc+p, 0);
     //esta es la forma imperativa ,mas facil de entender. 
    this.total$ = 0;
    for( let i=0; i<products.length; i++){ 
      this.total$ += products[i].quantity*products[i].precio;
    }      
    });

  }
  ngOnInit(): void {
  } 

}
