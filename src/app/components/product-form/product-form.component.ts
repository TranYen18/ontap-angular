
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: IProduct ={
    name:'',
    price:0,
    img:'',
    description:''
  }
  constructor(
    private activateRoute:ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if(id){
      this.productService.getProduct(id).subscribe(data =>{
        this.product = data;
      })
    }
  }
  onSubmitProduct(){
    const id = +this.activateRoute.snapshot.paramMap.get('id')!;
    if(id) {
      this.productService.updateProduct(this.product).subscribe(data => {
        this.router.navigate(['/product']);
      })
    }
    this.productService.addProduct(this.product).subscribe(data =>{
      this.router.navigate(['/product'])
    })
  }

}
