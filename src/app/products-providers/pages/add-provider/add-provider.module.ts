import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProviderPageRoutingModule } from './add-provider-routing.module';

import { AddProviderPage } from './add-provider.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AddProviderPageRoutingModule
  ],
  declarations: [AddProviderPage]
})
export class AddProviderPageModule {}
