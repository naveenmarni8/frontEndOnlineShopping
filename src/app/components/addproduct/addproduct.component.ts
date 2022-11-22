import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { AddProductService } from 'src/app/services/add-product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  productForm = this._formbuilder.group(
    {
      productName :[''],
      productDescription:[''],
      price :[''],
      Features:[''],
      ProductStatus:[''],
      Qty:['']
    }
  );

  productAdded:boolean=false;

  

  constructor(private _formbuilder:FormBuilder,private _addProductService : AddProductService) { }

  ngOnInit(): void {
  }

  submit()
  {
    let product:any={
    productName:this.productForm.value.productName,
    productDescription:this.productForm.value.productDescription,
    price:this.productForm.value.price,
    features: this.productForm.value.Features.split(","),
    productStatus:this.productForm.value.ProductStatus,
    qty:this.productForm.value.Qty
    }

    this._addProductService.addProduct(product).subscribe(
      (res)=>
      {
        console.log("response: ",res.id!=null);
        this.productAdded=res.id!=null;
      }
    );

    //console.log("productForm: ",product);
  }

}
