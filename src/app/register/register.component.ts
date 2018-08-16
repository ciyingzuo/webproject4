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
  password2: String;

  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  preregister = (username, password, password2) => {
    if (password !== password2) {
      alert('Password doesn\'t match');
      return;
    }

    this.userService.queryUser(username).then(status => {
        if (status === 400) {
          alert('Username already exist');
          return;
        } else {
          this.register(username, password);
        }
    });
  };

  loginPage() {
    this.router.navigate(['login']);
  }

  register = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    this.userService.register(user)
      .then(u => this.router.navigate(['profile']));
  }

  ngOnInit() {
  }

}
