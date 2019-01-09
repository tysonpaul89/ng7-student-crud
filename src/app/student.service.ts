import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private serviceUrl = 'http://localhost:3300/'

  constructor(private http: HttpClient) { }

  getAllStudents() {
    const url = this.serviceUrl + 'students'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.get(url, httpOptions);
  }
}
