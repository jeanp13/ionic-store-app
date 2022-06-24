import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  async login() {
    const headers = {
      'content-type': 'application/json',
    };
    const data = { email: this.email, password: this.password };
    await this.http
      .post(`${environment.url_api}/sessions`, data, { headers })
      .toPromise()
      .then((response: Response) => {
        console.log(response.body);
      });
  }

  loginGoogle() {}
}
