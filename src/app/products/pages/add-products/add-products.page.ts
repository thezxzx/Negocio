import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Products } from '../../interfaces/products-interface';
import { finalize, tap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
const { Camera } = Plugins;

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.page.html',
  styleUrls: ['./add-products.page.scss'],
})
export class AddProductsPage implements OnInit {

  imageUrl: string = '';

  uploadPercent: number;
  urlImage: Observable<string>;

  percentage: number = 0;
  //productos: Products[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private afs: AngularFireStorage,
    private productsService: ProductsService,
    private toastCtrl: ToastController ) { }

  ngOnInit() {
  }

  // Campos del formulario
  form: FormGroup = this.formBuilder.group({
    nameProduct: [ '', [ Validators.required ] ],
    barCode: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    unitPrice: [ 0, [ Validators.required, Validators.min( 1 ), Validators.max( 1000 ) ] ],
    cost: [ 0, [ Validators.required, Validators.min( 1 ) ] ],
    stock: [ 0, [ Validators.required, Validators.min( 1 ), Validators.max( 500 ) ] ],
    description: [ '', [ Validators.required, Validators.minLength( 30 ) ] ]
    // category: [ '', [ Validators.required ] ],
    // provider: [ '', [ Validators.required ] ]
    
  });


  // Añadir productos a la base de datos
  onAddProduct() {

    // Permite saber si el formulario es válido
    if ( this.form.invalid ) {
      this.form.markAllAsTouched();

      // Toast para llenar todos los campos
      this.presentToast( 'Es necesario llenar todos los campos' );

      return;
    }

    const imageURL = this.imageUrl;
    const product: Products = {
      ...this.form.value,
      imageURL
    }

    this.productsService.insertProduct( product );

    // Toast para 
    this.presentToast( 'Producto agregado correctamente' );

  }


  // Obtener imagen desde la camara
  async getImage() {

    const img = await Camera.getPhoto({
      quality: 60,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      saveToGallery: true
    });

    const image = this.dataURItoBlob( img.dataUrl )

    // this.image = await this.convertImageToBlob( img );
    // this.subirImagen( img.dataUrl );
    // console.log( image );
    this.subirImagen( image );
    // console.log( this.imagenCamera );
  }

  // Convertir imagen a Blob
  dataURItoBlob( dataURI: string ) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

  // Subir imagen a firestore
  async subirImagen( imagen: Blob ) {

    const id = Math.random().toString(36).substring(2);
    const file = imagen;
    const filePath = `imagenes/${ id }`;
    const ref = this.afs.ref( filePath );
    const task = this.afs.upload( filePath, file );
    
    task.snapshotChanges()
        .pipe(
          tap( snap => this.uploadPercent = snap.bytesTransferred/snap.totalBytes),
          finalize( () => ref.getDownloadURL().subscribe( url => { this.imageUrl = url}))
        ).subscribe();
  }

  // Presentar mensaje
  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
