import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {current} from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser = {
    _id: {},
    username: '',
    password: '',
    emailAddress: '',
    phoneNumber: '',
    section: [],
  };

  constructor(private userService: UserServiceClient) { }

  logout() {

  }

  ngOnInit() {
    this.userService.currentUser()
      .then(user =>
        this.currentUser = user
      );
  }

}
