import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController, MenuController } from '@ionic/angular';
import { ValidatorsService } from 'src/app/shared/services/validators.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router,
               private alertCtrl: AlertController,
               private validatorService: ValidatorsService,
               private menu: MenuController  ) {
                 this.menu.enable( false );
              }
    
  ngOnInit() {}
    

  async onLogout() {
    await this.authService.logout();
  }
    
  miFormulario: FormGroup = this.fb.group({
    email: [ 'oscarmiguelayalaruelas@gmail.com', [ Validators.required, Validators.pattern( this.emailPattern ) ] ],
    password: [ '123456789', [ Validators.required, Validators.minLength( 6 ) ] ],
    password2: [ '', [ Validators.required ] ]
  },{
    validators: [ this.validatorService.samePasswords( 'password', 'password2' ) ]
  });

  async onRegister() {

    const email: string = this.miFormulario.get('email').value;
    const password: string = this.miFormulario.get('password').value;

    try {
      const user = await this.authService.registerWithEmail( email, password );
      if ( user ) {
        const { displayName, email, emailVerified, uid } = user;
        this.verifyEmailAlert();
        this.authService.addUser( { displayName, email, emailVerified, uid } );
      } 
      
    } catch ( error ) {
      console.log( error );
    }
  }


  // Verify Email Alert
  async verifyEmailAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Registrado correctamente',
      message: 'Verifique su correo',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigate( ['/login'] );
          }
        }
      ]
    });

    await alert.present();
  }

}
