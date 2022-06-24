import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit() {}

  async login() {
    this.userService.login(this.email, this.password);
    this.router.navigateByUrl('/main/resumo');
  }

  loginGoogle() {}
}
