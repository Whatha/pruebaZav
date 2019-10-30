import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}
  //Crea un nuevo gato
  public createCat(data: {nombre: string, url: string}) {
    return this.firestore.collection('cats').add(data);
  }
  //Obtiene un gato
  public getCat(documentId: string) {
    return this.firestore.collection('cats').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los gatos
  public getCats() {
    return this.firestore.collection('cats').snapshotChanges();
  }

   public getDientes() {
    return this.firestore.collection('dientes').snapshotChanges();
  }
  //Actualiza un gato
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('cats').doc(documentId).set(data);
  }

    public createCotizacion(data: {nombre: string, correo: string, celular: number, acepto: boolean}) {
    return this.firestore.collection('cotizaciones').add(data);
  }


  //Obtiene un gato
  public getCotizacion(documentId: string) {
    return this.firestore.collection('cotizaciones').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los gatos
  public getCotizaciones() {
    return this.firestore.collection('cotizaciones').snapshotChanges();
  }
  //Actualiza un gato
  public updateCotizacion(documentId: string, data: any) {
    return this.firestore.collection('cotizaciones').doc(documentId).set(data);
  }
}