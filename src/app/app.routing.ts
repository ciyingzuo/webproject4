import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionsComponent} from './sections/sections.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {SubmissionListComponent} from './submission-list/submission-list.component';
import {SubmissionComponent} from './submission/submission.component';

const appRoutes: Routes = [
  { path: 'enrollment/:courseId', component: EnrollmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'admin', component: SectionsComponent },
  { path: 'quiz', component: QuizListComponent },
  { path: 'quiz/:quizId/submissions', component: SubmissionListComponent },
  { path: 'quiz/:quizId/submission/:submissionId', component: SubmissionComponent },
  { path: 'quiz/:quizId', component: QuizTakerComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
