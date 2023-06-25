import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  private auth: Auth = inject(Auth);
  user: User = {
    email: '',
    password: '',
  };

  constructor(private toastr: ToastrService) { }

  async loginUser() {
    try {
      await signInWithEmailAndPassword(this.auth, this.user.email!, this.user.password!);
    } catch (error) {
      this.toastr.error('Wrong password!');
    }
  }
}