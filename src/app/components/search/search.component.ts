import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedProduct:any;
  cartItems: Array<any> = JSON.parse(localStorage.getItem('cart') || '[]');
  constructor() { }

  ngOnInit(): void {
    this.searchedProduct=JSON.parse(localStorage.getItem('searchedProduct') || '');
    //console.log('Searched: ',localStorage.getItem('searchedProduct'));
  }

  addtoCart(product: Product) {
    this.cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

}
