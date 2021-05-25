import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';
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
  productos: Products[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private afs: AngularFireStorage,
    private productsService: ProductsService ) { }

  ngOnInit() {
  }

  // Campos del formulario
  form: FormGroup = this.formBuilder.group({
    nameProduct: [ '', [ Validators.required ] ],
    barCode: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
    unitPrice: [ 0, [ Validators.required, Validators.min( 1 ), Validators.max( 1000 ) ] ],
    cost: [ 0, [ Validators.required, Validators.min( 1 ) ] ],
    stock: [ 0, [ Validators.required, Validators.min( 1 ), Validators.max( 500 ) ] ],
    // category: [ '', [ Validators.required ] ],
    // provider: [ '', [ Validators.required ] ]
    
  });


  onAddProduct() {

    if ( this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    }

    const imageURL = this.imageUrl;
    const product: Products = {
      ...this.form.value,
      imageURL
    }


    this.productsService.insertarDatos( product );
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
}
