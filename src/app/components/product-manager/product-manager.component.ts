import { IProduct } from './../../Product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products!:IProduct[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.onProduct()

  }
  onProduct(){
    this.productService.getProducts().subscribe(data => {
      this.products=data
    })
  }
  onRemove(id:number){
    const confirm=window.confirm("Bạn có muốn xóa không ?")
    if(confirm){
      this.productService.removeProduct(id).subscribe(()=>{
      this.products=this.products.filter(item =>item.id !==id)
      
      })
    }
   
  }

}
