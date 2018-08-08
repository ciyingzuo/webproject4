import {Component, OnInit} from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {Location} from '@angular/common';


@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  currentUser = {
    _id: {}
  };
  sections = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sectionService: SectionServiceClient,
              private userService: UserServiceClient) {
  }

  enroll = sectionId => {
    this.sectionService
      .enroll(sectionId, this.currentUser._id).then((status) => {
      if (status === 200) {
        alert('enroll success');
      } else {
        alert('enroll failed');
      }
    });
  };

  profilePage() {
    this.router.navigate(['profile']);
  }


  ngOnInit() {
    this.userService.currentUser()
      .then(user =>
        this.currentUser = user
      );


    this.sectionService
      .findSectionsForCourse(this.route.snapshot.paramMap.get('courseId'))
      .then(sections => this.sections = sections);
  }

}
