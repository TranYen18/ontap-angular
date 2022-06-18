import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductManagerComponent } from './components/product-manager/product-manager.component';

const routes: Routes = [
  {
    path: '',
    component:HomePageComponent
  },
  {
    path: 'product',
    children:[
      {
        path:'',
        component:ProductManagerComponent
      },
      {
        path:'add',
        component:ProductFormComponent
      },
      {
        path:':id/edit',
        component:ProductFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
