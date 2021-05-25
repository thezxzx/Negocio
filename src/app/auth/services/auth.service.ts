import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/auth-interface';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { switchMap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';
import { Error } from '../interfaces/error-interface';
import { AuthErrorsService } from './auth-errors.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersCollection: string = 'users';
  
  user$: Observable<User>;

  constructor( private alertCtrl: AlertController,
               private afa: AngularFireAuth,
               private afs: AngularFirestore,
               private authErrorService: AuthErrorsService ) {
                 this.user$ = this.afa.authState.pipe(
                   switchMap( user => {
                     if ( user ) {
                       return this.afs.doc<User>( `${ this.usersCollection }/${ user.uid }` ).valueChanges();
                     }
                     return of( null );
                   })
                 );
               }

  // AUTH
  async registerWithEmail( email: string, password: string ): Promise<User> {
    try {
      const { user } = await this.afa.createUserWithEmailAndPassword( email, password );

      // Envia corre de verificación
      await this.sendVerificationEmail();

      // Crea el registro del usuario
      this.updateUserData( user );
      return user;
    } catch ( error ) {
      const err: Error = error;
      // Llamar al serivicio para crear los mensajes de alerta si algo sale mal
      this.authErrorService.errorAlert( err.code );
    }

  }

  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.afa.currentUser).sendEmailVerification();
    } catch ( error ) {
      console.log("🚀 ~ file: auth.service.ts ~ line 44 ~ AuthService ~ sendVerificationEmail ~ error", error);
    }

  }

  isEmailVerified( user: User ): Boolean {

    return user.emailVerified === true ? true : false;

  }

  async loginWithEmail( email: string, password: string ): Promise<User> {
    try {
      const { user } = ( await this.afa.signInWithEmailAndPassword( email, password ) );
      this.updateUserData( user );
      return user;
    } catch ( error ) {
      console.log('🚀 ~ file: auth.service.ts ~ line 59 ~ AuthService ~ loginWithEmail ~ error', error);
    }
  }

  async resetPassword( email: string ): Promise<void> {
    try {
      return await this.afa.sendPasswordResetEmail( email );
    } catch ( error ) {
      console.log("🚀 ~ file: auth.service.ts ~ line 63 ~ AuthService ~ resetPassword ~ error", error)
      
    }
  }

  async logout(): Promise<void> {
    try {
      return await this.afa.signOut();
    } catch ( error ) {
      console.log("🚀 ~ file: auth.service.ts ~ line 91 ~ AuthService ~ logout ~ error", error)
    }
  }

  // DATA
  async addUser( user: User ): Promise<void> {
    try {
      await this.afs.collection( this.usersCollection )
              .add( user );
      
    } catch ( error ) {
      console.log("🚀 ~ file: auth.service.ts ~ line 36 ~ AuthService ~ addUser ~ error", error );
    }
  }

  private updateUserData( user: User ) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${ user.uid }`);

    // Información que se registrará en la base de datos.
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName
    };

    return userRef.set( data, { merge: true } );
  }


  async presentAlert( message: string ) {

    const alert = await this.alertCtrl.create({
      header: '',
      message,
      buttons: ['OK']
    })

    alert.present();

  }
}
