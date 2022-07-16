import { Component, OnInit } from '@angular/core';
import products from '../../assets/products.json';
import { Products } from '../interface/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  counter: number = 5;
  productsList:Array<Products> =  products;
  productDetails: Products | undefined = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  }

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
   const ActivatedRouteID = this.activatedRoute.snapshot.params['id'];
   this.productDetails = this.productsList.find((product) => product.id == ActivatedRouteID);
  }

}
