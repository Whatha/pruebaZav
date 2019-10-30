import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
	public dientes = [];
  constructor( private firestoreService: FirestoreService) {
   }

  ngOnInit() {
  this.firestoreService.getDientes().subscribe((dienteSnapshot) => {
      this.dientes = [];
      dienteSnapshot.forEach((diente: any) => {
        this.dientes.push({
          id: diente.payload.doc.id,
          data: diente.payload.doc.data()
        });
      })
    });
  }

}


