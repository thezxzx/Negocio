import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Providers } from '../../interfaces/providers-interface';
import { ProvidersService } from '../../services/providers.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.page.html',
  styleUrls: ['./add-provider.page.scss'],
})
export class AddProviderPage implements OnInit {

  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  phonePatter: string = '[0-9]{3}0-9]{3}[0-9]{4}'
  constructor( private fb: FormBuilder,
               private providersService: ProvidersService,
               private toast: ToastController ) { }


  form: FormGroup = this.fb.group({
    name: ['qweqweqwe', [ Validators.required, Validators.minLength( 5 ) ] ],
    email: ['test@test.com', [ Validators.required, Validators.pattern( this.emailPattern ) ] ],
    phone: [ '+526471265414', [ Validators.required ]]
  });


  ngOnInit() {
  }

  async onSaveForm() {
    const name: string = this.form.get('name').value;
    const email: string = this.form.get('email').value;
    const phone: string = this.form.get('phone').value;

    const provider: Providers = {
      name,
      email,
      phone
    }
    
    this.providersService.insertProvider( provider );
    this.createToast();
  }

  async createToast() {
    const toast = await this.toast.create({
      message: 'Proveedor agregado.',
      duration: 2000
    });
    toast.present();
  }
}
