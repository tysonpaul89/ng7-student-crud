import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ISurvey, QuestionType } from '../interfaces';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public surveyData: ISurvey[]
  public questionType = QuestionType

  constructor(private studentService: StudentService) {
    this.studentService.getSurData().subscribe(
      (res: ISurvey[]) => this.surveyData  = res
    );
    // this.studentService.putSurData();
    // this.studentService.postSurData();
    // this.studentService.delSurData();
  }

  ngOnInit() {
  }

}
