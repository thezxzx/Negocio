import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products-interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productosCollection: AngularFirestoreCollection;
  allproducts: Observable<Products[]>;

  constructor(
    private af: AngularFirestore
  ) {
    this.productosCollection = this.af.collection('Productos');
    this.allproducts = this.productosCollection.snapshotChanges()
      .pipe(
        map(
          ( actions ) => {
            return actions.map( a => {
              const data = a.payload.doc.data() as Products;
              data.id = a.payload.doc.id;
              return data;
            });
          }
        )
      );

  }


  async insertarDatos( data: Products ): Promise<void> {
    try {
      console.log( data );
      await this.af.collection('Productos').add( data );
    } catch ( error ) {
      console.log( 'error linea 16 datos.service', error );
    }
  }

  obtenerDatos() {

    try {   
      return this.allproducts;
      // return this.af.collection('productos').snapshotChanges();
    } catch (error) {
      console.log( 'error linea 27 datos.service', error );     
    }

  }

}
