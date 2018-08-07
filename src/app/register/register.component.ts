import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  register = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    this.userService.register(user)
      .then(u => this.router.navigate(['profile']));
  };

  ngOnInit() {
  }

}
