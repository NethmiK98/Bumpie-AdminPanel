import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  firestore: Firestore = inject(Firestore);
  categories$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'categories')
    this.categories$ = collectionData(aCollection);
  }
}
