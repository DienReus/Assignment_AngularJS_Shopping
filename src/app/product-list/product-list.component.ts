import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  page = 1;
  pageSize = 6;
  products : Product[];
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
   this.getProducts();
  }
  getProducts(){
this.productService.getProducts().subscribe(data => {
  this.products = data;
})
  }
  addToCart(product){
    this.productService.addToCard(product);
    console.log(product);
    window.alert('Đã thêm');
  }
}