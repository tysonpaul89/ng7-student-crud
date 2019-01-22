import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface IResponse {
  status: boolean;
  message: string;
  data: IStudent | IStudent[];
}

export interface IStudent {
  name: string;
  age: number;
  dob: string;
  _id: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private serviceUrl = 'http://localhost:3300/';

  constructor(private http: HttpClient) { }

  /**
   * Get all student data
   */
  getAllStudents() {
    const url = this.serviceUrl + 'students';

    return this.http.get(url);
  }

  /**
   * Get a student data by id
   * @param id Student ID
   */
  getStudent(id: string): Observable<IStudent | IStudent[]> {
    const url = this.serviceUrl + 'student/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.get(url, httpOptions)
      .pipe(
        map(
          (response: IResponse) => response.data
        )
      );
  }

  /**
   * Create Student
   * @param studentData Student Data
   */
  createStudent(studentData: IStudent) {
    const url = this.serviceUrl + 'student';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<IResponse>(url, studentData, httpOptions);
  }

  /**
   * Create Student
   * @param studentData Student Data
   */
  updateStudent(studentData: IStudent) {
    if (studentData._id.length) {
      const url = this.serviceUrl + 'student/' + studentData._id;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
      return this.http.put<IResponse>(url, studentData, httpOptions);
    }
  }

  /**
   * Delete Student
   * @param id Student ID
   */
  deleteStudent(id: string) {
    const url = this.serviceUrl + 'student/' + id;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    // Sequential HTTP calls
    // https://coryrylan.com/blog/angular-multiple-http-requests-with-rxjs
    return this.http.delete<IResponse>(url, httpOptions)
      .pipe(
        mergeMap(
          (response: IResponse) => this.getAllStudents()
            .pipe(
              map(
                (res: IResponse) => res.data
              )
            )
        )
      );
  }

  /** TODO: Test */
  getSurData() {
    const url = 'http://35.200.169.173/api/survey/1'
    return this.http.get(url);

  }

  putSurData() {
    const url = 'http://35.200.169.173/api/survey/3'
    const data = {
      "pages": [{
        "title": "Page 11122",
        "order": 2,
        "questions": [{
          "question_type": {
            "question_type": "1",
            "status": true
          },
          "order": 1,
          "question": "How are u?",
          "options": [{
            "order": 1,
            "name": "Option 1",
            "value": "1"
          }, {
            "order": 2,
            "name": "Option 2",
            "value": "2"
          }]
        }, {
          "question_type": {
            "question_type": "1",
            "status": true
          },
          "order": 2,
          "question": "What is your name?",
          "options": [{
            "order": 1,
            "name": "Option 1",
            "value": "1"
          }, {
            "order": 2,
            "name": "Option 2",
            "value": "2"
          }]
        }]
      }, {
        "title": "Page 222",
        "order": 22,
        "questions": [{
          "question_type": {
            "question_type": "1",
            "status": true
          },
          "order": 1,
          "question": "How are u?",
          "options": [{
            "order": 1,
            "name": "Option 1",
            "value": "1"
          }, {
            "order": 2,
            "name": "Option 2",
            "value": "2"
          }]
        }, {
          "question_type": {
            "question_type": "1",
            "status": true
          },
          "order": 2,
          "question": "What is your name?",
          "options": [{
            "order": 1,
            "name": "Option 1",
            "value": "1"
          }, {
            "order": 2,
            "name": "Option 2",
            "value": "2"
          }]
        }]
      }],
      "name": "Survey 5",
      "category": {
        "category": "survey",
        "status": true
      },
      "status": true,
      "company_id": 1
    };
    this.http.put(url,data).subscribe(
      (res) => console.log(res)
    );

  }

  postSurData() {
    const url = 'http://35.200.169.173/api/2/surveys'
    const data = {
      "pages": [{
        "title": "Page 111",
        "order": 1,
        "questions": [{
          "question_type": {
            "question_type": "1",
            "status": true
          },
          "order": 1,
          "question": "How are u?",
          "options": [{
            "order": 1,
            "name": "Option 1",
            "value": "1"
          }, {
            "order": 2,
            "name": "Option 2",
            "value": "2"
          }]
        }, {
          "question_type": {
            "question_type": "1",
            "status": true
          },
          "order": 2,
          "question": "What is your name?",
          "options": [{
            "order": 1,
            "name": "Option 1",
            "value": "1"
          }, {
            "order": 2,
            "name": "Option 2",
            "value": "2"
          }]
        }]
      }, {
        "title": "Page 2222",
        "order": 2,
        "questions": [{
          "question_type": {
            "question_type": "1",
            "status": true
          },
          "order": 1,
          "question": "How are u?",
          "options": [{
            "order": 1,
            "name": "Option 1",
            "value": "1"
          }, {
            "order": 2,
            "name": "Option 2",
            "value": "2"
          }]
        }, {
          "question_type": {
            "question_type": "1",
            "status": true
          },
          "order": 2,
          "question": "What is your name?",
          "options": [{
            "order": 1,
            "name": "Option 1",
            "value": "1"
          }, {
            "order": 2,
            "name": "Option 2",
            "value": "2"
          }]
        }]
      }],
      "name": "Survey 5",
      "category": {
        "category": "survey",
        "status": true
      },
      "status": true,
      "company_id": 1
    };
    this.http.post(url,data).subscribe(
      (res) => console.log(res)
    );

  }

  delSurData() {
    const url = 'http://35.200.169.173/api/survey/3'
    this.http.delete(url).subscribe((res)=>console.log(res));
  }
  /** TODO: Test - End */
}
