import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { GetAllProductsService } from 'src/app/services/get-all-products.service';
import { UpdateproductService } from 'src/app/services/updateproduct.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  productsList:Array<any> = [];

  constructor(private _getAllProductsService : GetAllProductsService,private _updateProductService : UpdateproductService) { }

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

  updateProduct(product:Product)
  {
    console.log('updateProduct ', product);
    this._updateProductService.updateProductService(product.id,product.qty).subscribe(
      (res)=>{
        console.log('res: ',res);
      }
    )
  }

}
