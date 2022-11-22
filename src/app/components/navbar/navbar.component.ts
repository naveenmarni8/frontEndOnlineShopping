import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Product } from 'src/app/model/product.model';
import { BackendService } from 'src/app/services/backend-service.service';
import { GetAllProductsService } from 'src/app/services/get-all-products.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuth=false;
  productsList: Array<any> = [];
  product:any=undefined;

  constructor(private _backendService: BackendService,private _router:Router,private _getAllProductsService: GetAllProductsService) { console.log('calling cons')}

  ngOnInit(): void {
    console.log('calling oninit');
    this.isAuth = localStorage.getItem('userData')?true:false;
    if(!this.isAuth)
    {
      this._router.navigateByUrl('/login');
    }
    this._getAllProductsService.viewProducts().subscribe(
      (res) => {
        //console.log("resp: ",res);
        res.forEach((product) => {
          this.productsList.push(product);
        });
        console.log("prodList: ", this.productsList);
      }
    );
  }

  ngDoCheck()
  {
    this.isAuth = localStorage.getItem('userData')?true:false;
    console.log('doCheck');
  }

  onSearch(productName:string)
  {
    
    this.product = this.productsList.find((item)=>item.productName===productName)  
    if(this.product!==undefined)
    {
    localStorage.setItem('searchedProduct',JSON.stringify(this.product));
    this._router.navigateByUrl('/search');
    }
    
    //this._router.navigateByUrl('/search');
  }

  onLogout()
  {
    console.log('calling logout');
    this._backendService.logout();
    this.ngOnInit();
  }

}
