import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/products-interface';
import { PopoverController, AlertController, ToastController } from '@ionic/angular';
import { DeleteUpdateComponent } from '../../components/delete-update/delete-update.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.page.html',
  styleUrls: ['./show-products.page.scss'],
})
export class ShowProductsPage implements OnInit {


  allProducts: Products[] = [];

  constructor(
    private router: Router,
    private popOverCtrl: PopoverController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private productsService: ProductsService
  ) {
    this.productsService.getAllProducts().subscribe( products => {
      this.allProducts = products;
    });
  }

  ngOnInit() {
  }

  async presentPopover(ev: any, product: Products) {
    const popover = await this.popOverCtrl.create({
      component: DeleteUpdateComponent,
      cssClass: 'my-custom-class',
      event: ev,
      componentProps: product,
      translucent: true
    });
    await popover.present();
    
    // Devuelve la opción seleccionada en el popover
    const { data } = await popover.onWillDismiss();
    
    // Funcionesa a realizar
    if( data?.option === 'Update' ) {
      // Ejecutar función de para actualizar
      
      // Asignando el producto actual al servicio para editarlo en la pantalla de productos
      this.productsService.editProduct = product;

      // Navegación a la pantalla de edicion
      this.router.navigate(['/add-products']);

    } else if ( data?.option === 'Delete' ) {
      // Ejecutar función para eliminar
      this.deleteAlert( product.id );
    }
  }

  async deleteAlert( id: string ) {
    const alert = await this.alertCtrl.create({
      message: '¿Está seguro que desea eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'OK',
          handler: async () => {
            await this.productsService.deleteProduct( id );
            await this.toastMessage( 'Producto eliminado correctamente' );
          }
        }
      ]
    });

    await alert.present();
  }

  async toastMessage( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
