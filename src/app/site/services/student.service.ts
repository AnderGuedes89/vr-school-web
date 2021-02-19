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
    return this.http.post(environment.baseApiUrl + 'students', student);
  }

  public getStudentById(id: number) {
    return this.http.get(environment.baseApiUrl + 'students/' + id);
  }

  public updateStudent(student: Student, id: number) {
    return this.http.put(environment.baseApiUrl + 'students/' + id, student);
  }

}
