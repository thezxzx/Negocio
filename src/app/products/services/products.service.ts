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

  editProduct: Products;

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

  async insertProduct( data: Products ): Promise<void> {
    try {
      console.log( data );
      await this.af.collection('Productos').add( data );
    } catch ( error ) {
      console.log( 'error linea 16 datos.service', error );
    }
  }

  getAllProducts() {

    try {   
      return this.allproducts;
    } catch (error) {
      console.log( 'Error linea 27 products.service', error );     
    }

  }

  async deleteProduct( id: string ) {
    try {
      
      this.af.collection('Productos').doc( id ).delete();

    } catch (error) {
      console.log( 'Error línea 59 products.service', error );
    }
  }

}
