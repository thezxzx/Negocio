import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Providers } from '../interfaces/providers-interface';


@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  providersCollection: AngularFirestoreCollection;
  providers: Observable<Providers[]>;

  constructor(
    private angularFirestore: AngularFirestore
  ) {}

  async insertProvider( provider: Providers ): Promise<void> {

    try {
      await this.angularFirestore.collection('providers').add( provider );
    } catch ( err ) {
      console.log("🚀 ~ file: providers.service.ts ~ line 42 ~ ProvidersService ~ insertProvider ~ err", err)
    }

  }

  getProviders() {
    try {
          // Obtener todos los proveedores
      this.providersCollection = this.angularFirestore.collection('providers');
      this.providers = this.providersCollection.snapshotChanges()
                      .pipe(
                        map(
                          actions => {
                            return actions.map( a => {
                              const data = a.payload.doc.data() as Providers;
                              data.id = a.payload.doc.id;
                              return data;
                            });
                          }
                        )
                      );
      return this.providers;

    } catch ( err ) {
      console.log("🚀 ~ file: providers.service.ts ~ line 51 ~ ProvidersService ~ getProviders ~ err", err)   
    }
  }

  async updateProvider( newProvider: Providers ): Promise<void> {
    try {
      await this.angularFirestore.collection('providers').doc( newProvider.id ).update( newProvider );
    } catch ( err ) {
      console.log("🚀 ~ file: providers.service.ts ~ line 60 ~ ProvidersService ~ updateProvider ~ err", err)
    } 
  }

  async deleteProvider( id: string ): Promise<void> {
    try {
      await this.angularFirestore.collection('providers').doc( id ).delete();
    } catch ( err ) {
      console.log("🚀 ~ file: providers.service.ts ~ line 68 ~ ProvidersService ~ deleteProvider ~ err", err)
    }
  }
}
