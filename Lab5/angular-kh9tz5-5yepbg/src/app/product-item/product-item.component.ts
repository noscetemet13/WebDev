import { Component, Input, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  products = products;

  @Input() categoryId!: number;

  like(product: any){
    product.likes += 1;
  }

  remove(product: any){
    product.show = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
