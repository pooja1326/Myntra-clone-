import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public breakpoint: number | undefined;
  public products: any;
  public cartItems: any[] = [];
  constructor(private ProductService: ProductService) {}

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
    this.getProductsList();
  }
  getProductsList() {
    this.ProductService.getProduct().subscribe((res: any) => {
      console.log(res + 'resposne of product');
      this.products = res;
    });
  }

  addToCart(product: any) {
    console.log(product + 'products are inceasing');
    let items = JSON.parse(localStorage.getItem('cartItems') || '{}');
    console.log(items);
    if (items.length) {
      this.cartItems = items;
    }
    this.cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}
