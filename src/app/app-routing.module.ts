import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceUsComponent } from './service-us/service-us.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
 {  path: 'product', component: ProductListComponent},
//  {  path: 'services', component: ServicessComponent},
 { path: 'about', component: AboutComponent},
 {  path: 'add-product', component: ProductAddComponent},
 { path: 'product/:id', component: ProductDetailComponent},
 {path: 'service', component: ServiceUsComponent},
 {path: 'cart', component: CardDetailComponent},
  {path: 'admin', component: AdminComponent, 
  children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      { path : 'manager', component: ProductManagerComponent},
      { path : 'add-product', component: ProductAddComponent},
      { path: 'product/edit/:id', component: ProductEditComponent},
      { path: 'product/detail/:id', component: DetailComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
