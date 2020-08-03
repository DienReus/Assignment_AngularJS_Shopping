import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  public products: Product[] ;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getItems();
  }
  removeCart(id){
    this.products = this.productService.removeCart(id);
  }
}
