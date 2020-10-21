import { Xliff } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from './products';
//incluimos otros archivos.

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor() { }
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
    },
    {
      nombre: "Mario",
      tipo: "Zapatos Hombre",
      talle: 40,
      precio: 2800,
      stock: 3,
      imagen: "assets/img/ribens.jpg",
      clearance: false,
    },
    {
      nombre: "Duqueza",
      tipo: "Zapatos Femenino",
      talle: 38,
      precio: 1800,
      stock: 2,
      imagen: "assets/img/ribens.jpg",
      clearance: false,
    },
    {
      nombre: "Legacy",
      tipo: "camisas",
      talle: 12,
      precio: 2000,
      stock: 0,
      imagen: "assets/img/ribens.jpg",
      clearance: true,
    }
  ]
  ngOnInit(): void {
  }

}
