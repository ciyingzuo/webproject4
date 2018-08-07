import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

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

  constructor(private sectionService: SectionServiceClient,
              private router: Router,
              private userService: UserServiceClient) {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  adminPage() {
    if (this.currentUser.username === 'admin') {
      this.router.navigate(['admin']);
    }
  }

  drop(sectionId) {
    this.sectionService.drop(sectionId);
  }

  ngOnInit() {
    this.userService.currentUser()
      .then(user =>
        this.currentUser = user
      );
  }

}
