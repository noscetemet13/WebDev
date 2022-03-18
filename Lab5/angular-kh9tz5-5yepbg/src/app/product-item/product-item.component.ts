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

  rating1(product: any){
    product.rating_text = (product.rating_text + 1) / 2;
    product.isDisabled = true;
  }

  rating2(product: any){
    product.rating_text = (product.rating_text + 2) / 2;
    product.isDisabled = true;
  }

  rating3(product: any){
    product.rating_text = (product.rating_text + 3) / 2;
    product.isDisabled = true;
  }

  rating4(product: any){
    product.rating_text = (product.rating_text + 4) / 2;
    product.isDisabled = true;
  }

  rating5(product: any){
    product.rating_text = (product.rating_text + 5) / 2;
    product.isDisabled = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
