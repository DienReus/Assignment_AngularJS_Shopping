import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.productService.getProduct(param.id).subscribe(data =>{
        this.product = data;
      })
    })
  }
  addToCart(product) {
    this.productService.addToCard(product);
    console.log(product);
    window.alert('Đã thêm');
  }

}