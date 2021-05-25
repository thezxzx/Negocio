import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor(  private fb: FormBuilder,
                private authService: AuthService,
                private menu: MenuController
    ) {
      this.menu.enable( false );
    }

  miFormulario: FormGroup = this.fb.group(
    {
      email: [ '', [ Validators.required, Validators.pattern( this.emailPattern ) ] ],
      password: [ '', [ Validators.required, Validators.minLength( 6 ) ] ]
    }
  );

  ngOnInit() {
  }

  async onLogin() {
    try {
      const user = await this.authService.loginWithEmail('oscarmiguelayalaruelas@gmail.com','123456789');
      if ( user ) {
        const isEmailVerified = this.authService.isEmailVerified( user );
        console.log( 'verified', isEmailVerified );
      }
    } catch ( error ) {
      console.log("🚀 ~ file: login.page.ts ~ line 20 ~ LoginPage ~ onLogin ~ error", error)
      
    }
  }

}
