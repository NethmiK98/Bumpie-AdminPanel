import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, serverTimestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.scss']
})
export class UserroleComponent {
  firestore: Firestore = inject(Firestore);
  admins$?: Observable<AdminUser[]>;

  constructor() {
    const postCollection = collection(this.firestore, 'admins')
    this.admins$ = collectionData(postCollection) as Observable<AdminUser[]>;
  }
}

export interface AdminUser {
  name: string;
  email: string;
  password: string;
  role: string;
}