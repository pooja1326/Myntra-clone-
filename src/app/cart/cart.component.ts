import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public cartLists: any[] = [];
  constructor() {}

  ngOnInit(): void {
    let items = JSON.parse(localStorage.getItem('cartItems') || '{}');
    if (items.length) {
      this.cartLists = items;
      console.log(this.cartLists + 'displaying from cart component');
    }
  }
  deleteItems(id: number) {
    const indexOfObject = this.cartLists.findIndex((object) => {
      return object.id === id;
    });

    console.log(indexOfObject);

    this.cartLists.splice(indexOfObject, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartLists));
  }
}
