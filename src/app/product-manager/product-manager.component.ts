import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  page = 1;
  pageSize = 3;
  name: string;
  products : Product[];
  
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
   this.getProducts();
  }
  removeItem(id){
    this.productService.removeProduct(id).subscribe(res => {
      this.products = this.products.filter(product => product.id != res.id);
    })
  }
  getProducts(){
this.productService.getProducts().subscribe(data => {
  this.products = data;
})
  }
  Search() {
    if (this.name != "") {
      this.products = this.products.filter(data => {
        return data.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    } else if (this.name == "") {
      this.ngOnInit();
    }

  }

}