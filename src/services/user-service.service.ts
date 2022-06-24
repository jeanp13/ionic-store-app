import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { IResultHttp } from 'src/interfaces/IResultHttp';
import api from './api.service';
import { HttpService } from './http.service';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpService) {}

  async login(email: string, password: string): Promise<IResultHttp> {
    try {
      const data = {
        email,
        password,
      };
      // console.log(JSON.stringify(data));

      const response = await api.post('sessions', data);
      // const response = await this.http.post('sessions', data);
      const { token, user } = response.data;
      console.log(response.data);
      sessionStorage.setItem(Constants.keyStore.token, `Bearer ${token}`);
      sessionStorage.setItem(Constants.keyStore.user, JSON.stringify(user));
      // sessionStorage.setItem(Constants.keyStore.user, user);
    } catch (err) {
      console.log(err);
    }
    return;
  }
}
