import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user;
  isLoggedIn = false;
  returnUrl = '/';

  // email = '';
  // password = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService,
  ) { }

  ngOnInit() {
    this.service.getUser().subscribe(user => {
      this.isLoggedIn = Boolean(user);
      this.user = user;
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginGoogle() {
    this.service.loginWithGoogle().then( data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        alert(error);
      });
  }

  // loginEmailAndPassword() {
  //   this.service.loginWithEmailAndPassword(this.email, this.password);
  // }

  logout() {
    this.service.logout();
  }
}
