import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./auth/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'show-products',
    loadChildren: () => import('./products/pages/show-products/show-products.module').then( m => m.ShowProductsPageModule)
  },
  {
    path: 'add-products',
    loadChildren: () => import('./products/pages/add-products/add-products.module').then( m => m.AddProductsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('./products-providers/pages/providers/providers.module').then( m => m.ProvidersPageModule)
  },
  {
    path: 'add-provider',
    loadChildren: () => import('./products-providers/pages/add-provider/add-provider.module').then( m => m.AddProviderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
