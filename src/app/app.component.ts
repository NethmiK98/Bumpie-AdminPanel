import { Component, inject, } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Auth, authState, User } from '@angular/fire/auth';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin-panel';
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  private auth: Auth = inject(Auth);
  authState$ = authState(this.auth);
  authStateSubscription: Subscription;

  constructor(private router: Router) {
    const aCollection = collection(this.firestore, 'items')
    this.items$ = collectionData(aCollection);

    this.authStateSubscription = this.authState$.subscribe((aUser: User | null) => {
      if (aUser === null) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/growthcycle']);
      }
      console.log(aUser);
    })
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }
}
