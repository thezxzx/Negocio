import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProviderPage } from './add-provider.page';

const routes: Routes = [
  {
    path: '',
    component: AddProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProviderPageRoutingModule {}
