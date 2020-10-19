import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor() { }
  product = {
      "nombre": "Ribens",
      "tipo" : "pantalon",
      "talle" : 42,
      "precio" : 800,
      "stock": 4,
      "imagen": "assets/img/ribens.jpg"
      }
  
  ngOnInit(): void {
  }

}
