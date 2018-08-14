import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  register = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    this.userService.register(user)
      .then(newUser => console.log(newUser));
  };

  ngOnInit() {
  }

}
