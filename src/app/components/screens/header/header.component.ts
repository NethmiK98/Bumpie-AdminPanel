import { Component, inject } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private auth: Auth = inject(Auth);

  async logOutUser(){
    await signOut(this.auth);
  }
}
