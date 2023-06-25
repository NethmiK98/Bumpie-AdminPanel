import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, orderBy, query, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-growth-cycle',
  templateUrl: './growth-cycle.component.html',
  styleUrls: ['./growth-cycle.component.scss']
})
export class GrowthCycleComponent {
  firestore: Firestore = inject(Firestore);
  weeks?: any;
  weekArticles$?: Observable<any[]>;
  selectedWeek: any;

  async ngOnInit(): Promise<void> {
    const ref = collection(this.firestore, 'growth-cycle');
    const q = query(ref, orderBy('week', 'asc'));
    const data = await getDocs(q);
    this.weeks = data.docs;
    this.selectedWeek = data.docs[0].data()['id'];
    this.getWeekArticles('');
  }

  getWeekArticles(event: any) {
    const ref = collection(this.firestore, `growth-cycle/${this.selectedWeek}/articles`);
    const q = query(ref, orderBy('order', 'asc'));
    this.weekArticles$ = collectionData(q);
  }
}
