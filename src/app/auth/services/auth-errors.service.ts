import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Error } from '../interfaces/error-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthErrorsService {

  constructor( private alertCtrl: AlertController ) { }


  async errorAlert( errorCode: string ) {

    switch ( errorCode ) {
      case 'auth/email-already-in-use':
        await this.presentAlert( 'Este correo electrónico ya está registrado' );
      break;

      case 'auth/invalid-email':
        await this.presentAlert( 'El correo electrónico no es válido.' );
      break;
      default:
        break;
    }

  }

  async presentAlert( message: string ) {

    const alert = await this.alertCtrl.create({
      header: '',
      message,
      buttons: ['OK']
    });

    await alert.present();

  }


}
