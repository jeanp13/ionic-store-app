import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/userModel';
import { Constants } from 'src/shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: UserModel;
  constructor() {
    this.user = JSON.parse(sessionStorage.getItem(Constants.keyStore.user));
  }

  ngOnInit() {}
}
