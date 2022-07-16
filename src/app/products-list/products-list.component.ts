import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';
import { Products } from './../interface/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList:Array<Products> =  products;

  constructor() { }

  ngOnInit(): void {

    console.log(this.productsList);
  }

}
