import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProductsPageRoutingModule } from './show-products-routing.module';

import { ShowProductsPage } from './show-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProductsPageRoutingModule
  ],
  declarations: [ShowProductsPage]
})
export class ShowProductsPageModule {}
