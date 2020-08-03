import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';
import {  Router} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product : Product = new Product();
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(300)]),
    desc: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required)
  });
  constructor(private productService : ProductService,
  private router: Router,
  private formbuiler : FormBuilder,
  ) { }

  ngOnInit() {
    
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    this.productService.addProduct(this.product).subscribe(data =>  this.router.navigateByUrl('/admin/manager'));
  }
  
}