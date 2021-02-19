import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Student from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getAllStudents() {
    return this.http.get<any[]>(environment.baseApiUrl + 'students');
  }

  public addStudent(student: Student) {
    debugger
    return this.http.post(environment.baseApiUrl + 'students', student);
  }

}
