import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { GetAllProductsService } from 'src/app/services/get-all-products.service';

@Component({
  selector: 'app-getallproducts',
  templateUrl: './getAllProducts.component.html',
  styleUrls: ['./getAllProducts.component.css']
})
export class GetAllProductsComponent implements OnInit {

  productsList: Array<any> = [];
  cartItems: Array<any> = JSON.parse(localStorage.getItem('cart') || '[]');


  constructor(private _getAllProductsService: GetAllProductsService) {

  }



  addtoCart(product: Product) {
    this.cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  ngOnInit(): void {
    this._getAllProductsService.viewProducts().subscribe(
      (res) => {
        //console.log("resp: ",res);
        res.forEach((product) => {
          this.productsList.push(product);
        });
        console.log("prodList: ", this.productsList);
      }
    )
  }

}
