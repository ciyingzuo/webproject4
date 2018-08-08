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
    _id: '',
    username: '',
    password: '',
    emailAddress: '',
    phoneNumber: '',
  };
  sections = [];

  constructor(private sectionService: SectionServiceClient,
              private router: Router,
              private userService: UserServiceClient) {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  coursePage() {
    this.router.navigate(['courses']);
  }

  adminPage() {
    if (this.currentUser.username === 'admin') {
      this.router.navigate(['admin']);
    }
  }

  updateUser(email, phone) {
    this.currentUser.emailAddress = email;
    this.currentUser.phoneNumber = phone;
    console.log(this.currentUser);
    this.userService.updateUser(this.currentUser);
  }

  drop(section) {
    section.seat = section.seat + 1;
    this.sectionService.drop(section, this.currentUser._id).then(response => {
      this.sectionService.findSectionForUser(this.currentUser._id).then(section =>
        this.sections = section);
    });

  }

  ngOnInit() {
    this.userService.currentUser()
      .then(user =>
        this.currentUser = user
      );

    this.userService.currentUser()
      .then(user =>
        this.sectionService.findSectionForUser(user._id)
          .then(section => {
              this.sections = section;
            }
          )
      );


  }

}
