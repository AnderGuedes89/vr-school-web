import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public listCourses: any;
  public form: FormGroup;
  public description = this.fb.control('', {
    validators: [Validators.maxLength(100)]
  });
  public menu = this.fb.control('', {
    validators: [Validators.maxLength(100)]
  });

  constructor(public courseService: CourseService, private fb: FormBuilder) {
    this.form = this.fb.group({
      description: this.description,
      menu: this.menu,
    });
  }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(response => {
      this.listCourses = response
      console.log(this.listCourses)
    });
  }

  public saveNewCourse() {
    debugger
    if (this.form.valid) {
      var request = this.form.value;
      this.courseService.addCourse(request).subscribe((response) => {
        console.log(request);
        location.reload();
      })
    }
  }

}
