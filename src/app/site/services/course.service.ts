import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Course from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  public getAllCourses() {
    return this.http.get<any[]>(environment.baseApiUrl + 'courses');
  }

  public addCourse(course: Course) {
    return this.http.post(environment.baseApiUrl + 'courses', course);
  }

  public getCourseById(id: number) {
    return this.http.get(environment.baseApiUrl + 'courses/' + id);
  }

}
