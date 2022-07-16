import { Component, OnInit, Input } from '@angular/core';
import { Products } from './../interface/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css'],
})
export class ProductsCardComponent implements OnInit {
  counter: number = 0;

  @Input() product: Products = {
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
  };

  constructor(private router:Router) {}

  ngOnInit(): void {}

  goToProductDetails(){
    this.router.navigate(['/product-details']);
  }

  goToEditProductPage(){
    this.router.navigate(['/edit-product']);
  }

  goToDeleteProductPage(){
    this.router.navigate(['/delete-product']);
  }


}
