import { Component, OnInit, Input } from '@angular/core';
import { Products } from './../interface/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css'],
})
export class ProductsCardComponent implements OnInit {

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

  // counter:number = this.product.rating.count;

  constructor(private router:Router) {}

  ngOnInit(): void {
    // console.log(this.counter);
  }

  goToProductDetails(id:number){
    this.router.navigate(['/product-details',this.product.id]);
  }

  goToEditProductPage(id:number){
    this.router.navigate(['/edit-product',this.product.id]);
  }

  goToDeleteProductPage(){
    this.router.navigate(['/delete-product']);
  }


}
