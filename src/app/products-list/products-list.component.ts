import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './products';
//incluimos otros archivos.

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  //inyeccion de dependencia
  constructor(private cart: ProductCartService) {
   }

  //tipamos con Products
  products: Product[] = [
    {
      "nombre": "Ribens",
      tipo: "pantalon",
      talle: 42,
      precio: 800,
      stock: 4,
      imagen: "assets/img/ribens.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      nombre: "Mario",
      tipo: "Zapatos Hombre",
      talle: 40,
      precio: 2800,
      stock: 3,
      imagen: "assets/img/zapatos.jpg",
      clearance: false,
      quantity:0,
    },
    {
      nombre: "Duqueza",
      tipo: "Zapatos Femenino",
      talle: 38,
      precio: 1800,
      stock: 2,
      imagen: "assets/img/zapatosF.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      nombre: "Legacy",
      tipo: "camisas",
      talle: 12,
      precio: 2000,
      stock: 0,
      imagen: "assets/img/camisa.jpg",
      clearance: true,
      quantity:0,
    },
  ];
  ngOnInit(): void {
  }

  addToCart(product):void {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
  maxReached(m: string){
    console.log(m);
  }

}
