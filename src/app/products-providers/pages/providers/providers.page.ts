import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { Providers } from '../../interfaces/providers-interface';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.page.html',
  styleUrls: ['./providers.page.scss'],
})
export class ProvidersPage implements OnInit {

  providers: Providers[] = [];

  constructor( private providersService: ProvidersService,
               private toast: ToastController ) { }

  ngOnInit() {
    this.providersService.getProviders().subscribe( provider => {
      this.providers = provider;
    })
  }

  onDelete( id: string ) {
    this.providersService.deleteProvider( id );
    this.createToast();
  }

  async createToast() {
    const toast = await this.toast.create({
      message: 'Proveedor eliminado.',
      duration: 2000
    });
    toast.present();
  }
}
