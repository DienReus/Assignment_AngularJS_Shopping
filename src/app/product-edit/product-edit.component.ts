import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';
import {  Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product : Product;
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(300)]),
    desc: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required)
  });
  constructor(private productService : ProductService,
  private route: ActivatedRoute,
  private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  get f(){
    return this.form.controls;
  }
 getProduct(){
  this.route.params.subscribe(param => {
    this.productService.getProduct(param.id).subscribe(data => {
      this.product = data;
    })
  })
 }
 submit(){
  this.productService.editProduct(this.product).subscribe(data =>{
    this.router.navigateByUrl('/admin/manager');
  })
 }
 
}