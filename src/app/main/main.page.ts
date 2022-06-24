import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/shared/constants';

@Component({
  selector: 'app-main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss'],
})
export class TabsPage {
  constructor(public router: Router) {
    const token = sessionStorage.getItem(Constants.keyStore.token);
    if (!token) {
      this.router.navigateByUrl('/');
    }
  }
}
