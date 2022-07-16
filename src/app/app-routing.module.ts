import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:ProductsListComponent},
  {path:'product-details/:id', component: ProductDetailsComponent},
  {path:'add-product'    , component: AddProductComponent, canActivate:[AuthGuard]},
  {path:'edit-product'   , component: EditProductComponent},
  {path:'login'  , component:LoginComponent},
  {path:'register'  , component:RegisterComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
