import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public allStudents: Object;

  constructor(private studentService: StudentService) {
    this.studentService.getAllStudents().subscribe(
      (response: any) => {
        console.log(response.data);
        this.allStudents = response.data;
      }
    );
  }

  ngOnInit() {
  }

}
