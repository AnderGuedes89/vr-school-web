import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public listCourses: any;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(response => {
      this.listCourses = response
      console.log(this.listCourses)
    });
  }

}
