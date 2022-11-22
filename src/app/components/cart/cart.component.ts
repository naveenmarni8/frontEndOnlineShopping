import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDto } from 'src/app/dto/product-dto.dto';
import { Product } from 'src/app/model/product.model';
import { PlaceorderService } from 'src/app/services/placeorder.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<any> = [];
  totalCost:number=0;
  orderItems: Array<ProductDto>=[];
  isItems:boolean=false;

  constructor(private _placeOrderService : PlaceorderService,private _router:Router) { }

  ngOnInit(): void {
    JSON.parse(localStorage.getItem('cart') || '[]').forEach(
      (item: Product)=>{
        this.cartItems.push(item);
      }
    );
    //console.log('cartItems: *',this.cartItems.length);
    
    //this.cartItems=this.cartItems.filter((item)=>item.id!==item.id);
    this.cartItems=this.cartItems.filter((item, index, self) => self.findIndex((x)=>x.id===item.id)===index);
    
    localStorage.setItem('cart',JSON.stringify(this.cartItems));
    
    //forEach((item)=>console.log(item));
  
    //console.log('Cart Items: ',this.totalCost);
  }

  ngDoCheck(){
    this.isItems = this.cartItems.length===0;
    this.totalCost=0;
    this.cartItems.forEach((item)=>this.totalCost+=item.price)
    
  }
  
  placeOrder()
  {
    //console.log('cart: ', localStorage.getItem('cart')?.length)
    this.cartItems.forEach((item)=>

       this.orderItems.push({
        "id":item.id,
        "productName":item.productName,
        "qty":1
      })
      
    );
    console.log('order: ',this.orderItems);
    this._placeOrderService.placeOrderService({userId:'1234',productDtoList:this.orderItems}).subscribe(
      (res)=>{
        //console.log("Order Status: ",res);
        localStorage.setItem('cart',"");
        this._router.navigateByUrl('/order');
      }
    )
  }

  remove(productId:string)
  {
    this.cartItems = this.cartItems.filter(
      (item)=>item.id!==productId
    );
    localStorage.setItem('cart',JSON.stringify(this.cartItems));
  }

}
