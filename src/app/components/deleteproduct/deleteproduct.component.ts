import { Component, OnInit } from '@angular/core';
import { DeleteproductService } from 'src/app/services/deleteproduct.service';
import { GetAllProductsService } from 'src/app/services/get-all-products.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  productsList:Array<any> = [];

  constructor(private _getAllProductsService : GetAllProductsService, private _deleteProduct : DeleteproductService) { }

  ngOnInit(): void {
    this._getAllProductsService.viewProducts().subscribe(
      (res)=>{
        //console.log("resp: ",res);
        res.forEach((product)=>{
           this.productsList.push(product);
        });
        console.log("prodList: ",this.productsList);
      }
    );
  }

  deleteProduct(productId:string)
  {
      console.log('productId: ',productId);
      this._deleteProduct.deleteproductService(productId).subscribe(
        (res)=>{
          console.log('working');
          this.productsList=this.productsList.filter((product)=>product.id!=productId);
        }
      )
  }

}
