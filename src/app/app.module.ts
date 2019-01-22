import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { TestComponent } from './test/test.component';
import { SingleInputComponent } from './test/single-input/single-input.component';
import { CheckboxComponent } from './test/checkbox/checkbox.component';
import { MultipleChoiceComponent } from './test/multiple-choice/multiple-choice.component';
import { DropdownComponent } from './test/dropdown/dropdown.component';
import { CommentComponent } from './test/comment/comment.component';
import { RatingComponent } from './test/rating/rating.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentListComponent,
    StudentViewComponent,
    StudentCreateComponent,
    StudentEditComponent,
    TestComponent,
    SingleInputComponent,
    CheckboxComponent,
    MultipleChoiceComponent,
    DropdownComponent,
    CommentComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
