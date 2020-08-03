import { Injectable } from "@angular/core";
import { Product } from "../Product";
import { HttpClient } from "@angular/common/http";
import { Observable} from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [];
  api = 'https://5e7af61e0e046300163326f3.mockapi.io/product';
  constructor(private http : HttpClient) {}
  getProducts(): Observable <Product[]> {
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable <Product> {
   return this.http.get<Product>(`${this.api}/${id}`);
  }
  removeProduct(id): Observable <Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
  addProduct(product): Observable <Product> {
    return this.http.post<Product>(`${this.api}`,product);

  }
  editProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`,product);
  }
  getItems(){
    return this.products;
  }
  addToCard(product){
    this.products.push(product);
  }
  clearCart() {
    this.products = [];
    return this.products;
  }

  removeCart(id) {
    return this.products = this.products.filter(product => product.id != id);
  }

}
