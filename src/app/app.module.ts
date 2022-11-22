import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { GetAllProductsComponent } from './components/getAllProducts/getAllProducts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NavbarComponent } from './components/navbar/navbar.component'
import { TokeninterceptorService } from './services/tokeninterceptor.service';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    CartComponent,
    SearchComponent,
    AddproductComponent,
    GetAllProductsComponent,
    LoginPageComponent,
    NavbarComponent,
    DeleteproductComponent,
    UpdateproductComponent,
    OrderPageComponent,
    RegisterPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatProgressBarModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
