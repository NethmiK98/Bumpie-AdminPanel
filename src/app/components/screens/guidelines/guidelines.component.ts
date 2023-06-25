import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent {
  firestore: Firestore = inject(Firestore);
  meditation$?: Observable<any[]>;
  nutritions$?: Observable<any[]>;
  breastfeeding$?: Observable<any[]>;

  ngOnInit(): void {
    this.meditation$ = collectionData(collection(this.firestore, 'meditation'));
    this.nutritions$ = collectionData(collection(this.firestore, 'nutritions'));
    this.breastfeeding$ = collectionData(collection(this.firestore, 'breastfeeding'));
  }
}
