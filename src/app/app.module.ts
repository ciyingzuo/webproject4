import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';

import {routing} from './app.routing';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import {SectionsComponent} from './sections/sections.component';
import {SectionServiceClient} from './services/section.service.client';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {TrueFalseQuestionComponent} from './true-false-question/true-false-question.component';
import {FillBlanksQuestionComponent} from './fill-blanks-question/fill-blanks-question.component';
import {MultipleChoiceQuestionComponent} from './multiple-choice-question/multiple-choice-question.component';
import {EssayQuestionComponent} from './essay-question/essay-question.component';
import {QuizServiceClient} from './services/quiz.service.client';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { SubmissionComponent } from './submission/submission.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionsComponent,
    EnrollmentComponent,
    QuizListComponent,
    QuizTakerComponent,
    TrueFalseQuestionComponent,
    FillBlanksQuestionComponent,
    MultipleChoiceQuestionComponent,
    EssayQuestionComponent,
    SubmissionListComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
