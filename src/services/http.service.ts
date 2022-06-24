import { Constants } from './../shared/constants';
import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import api from './api.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private alertSrv: AlertService,
    private spinnerSrv: SpinnerService
  ) {}

  public get(url: string): Promise<Response> {
    return new Promise(async (resolve) => {
      try {
        await this.spinnerSrv.Show();
        return api.get(url);
      } catch (error) {
      } finally {
        this.spinnerSrv.Hide();
      }
    });
  }

  public post(
    url: string,
    model: any,
    headers?: HttpHeaders
  ): Promise<Response> {
    const header = this.createHeader(headers);
    return new Promise(async (resolve) => {
      try {
        await this.spinnerSrv.Show();
        return api.post(url, model);
      } catch (error) {
        this.spinnerSrv.Hide();
        if (error.status === 400) {
          console.log(error.error);
          let errorsText = '<ul>';
          if (Array.isArray(error.error)) {
            error.error.forEach((element) => {
              errorsText += `<li style="text-align: left">${
                element.message || element
              }</li>`;
            });
            errorsText += '</ul>';
            await this.alertSrv.alert('Atenção', errorsText);
          }
        }
        if (error.status === 404) {
          await this.alertSrv.alert('Atenção', error.error);
        }
        // resolve({ success: false, data: {}, error });
      } finally {
        this.spinnerSrv.Hide();
      }
    });
  }

  public delete(url: string): Promise<Response> {
    const header = this.createHeader();
    return new Promise(async (resolve) => {
      try {
        await this.spinnerSrv.Show();
        return this.http.delete(url, { headers: header }).toPromise();
      } catch (error) {
      } finally {
        this.spinnerSrv.Hide();
      }
    });
  }

  private createHeader(header?: HttpHeaders): HttpHeaders {
    if (!header) {
      header = new HttpHeaders();
    }

    header = header.append('Content-Type', 'application/json');
    header = header.append('Accept', 'application/json');

    const token = localStorage.getItem(Constants.keyStore.token);
    if (token) {
      header = header.append('Authorization', token);
    }

    return header;
  }
}
