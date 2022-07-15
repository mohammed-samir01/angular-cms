import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList = products;

  constructor() { }

  ngOnInit(): void {
  }

}
