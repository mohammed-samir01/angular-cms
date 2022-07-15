import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit {

  counter = 5;

  @Input () productName:string = "product name";

  constructor() { }

  ngOnInit(): void {
  }

}
