import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/products-interface';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.page.html',
  styleUrls: ['./show-products.page.scss'],
})
export class ShowProductsPage implements OnInit {


  allProducts: Products[] = [];

  constructor(
    private productsService: ProductsService
  ) {
    this.productsService.getAllProducts().subscribe( products => {
      this.allProducts = products;
    });
  }

  ngOnInit() {
  }

  cardClick( product: Products ) {

    console.log( product );

  }

}
