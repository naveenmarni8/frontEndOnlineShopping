import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {  GetAllProductsComponent } from './components/getAllProducts/getAllProducts';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ServicesComponent } from './components/services/services.component';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { SearchComponent } from './components/search/search.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';


const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch: 'full'},
  {path:'home',component:GetAllProductsComponent},
  {path:'login',component:LoginPageComponent},
  {path:'services',component:ServicesComponent},
  {path:'cart',component: CartComponent},
  {path:'addproduct',component: AddproductComponent},
  {path:'getallproducts',component:GetAllProductsComponent},
  {path:'deleteproduct',component:DeleteproductComponent},
  {path:'updateproduct',component:UpdateproductComponent},
  {path:'order',component:OrderPageComponent},
  {path:'search',component:SearchComponent},
  {path:'register',component:RegisterPageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
