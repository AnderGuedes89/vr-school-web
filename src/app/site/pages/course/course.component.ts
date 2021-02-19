import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @ViewChild('exampleModal', { static: true }) exampleModal: any;
  @ViewChild('newFeatureModal', { static: true }) newFeatureModal: any;

  public listCourses: any;
  public course: any;
  public form: FormGroup;
  public id = this.fb.control('');
  public description = this.fb.control('', {
    validators: [Validators.maxLength(100)]
  });
  public menu = this.fb.control('', {
    validators: [Validators.maxLength(100)]
  });

  constructor(public courseService: CourseService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.form = this.fb.group({
      id: this.id,
      description: this.description,
      menu: this.menu,
    });
  }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(response => {
      this.listCourses = response
    });
  }

  public saveNewCourse() {
    debugger
    if (this.form.valid) {
      var request = this.form.value;
      this.courseService.addCourse(request).subscribe((response) => {
        location.reload();
      })
    }
  }

  public getCourseById(id: number) {
    this.courseService.getCourseById(id).subscribe(response => {
      this.course = response
      this.form.controls.id.setValue(this.course.id);
      this.form.controls['id'].disable();
      this.form.controls.description.setValue(this.course.description);
      this.form.controls.menu.setValue(this.course.menu);
      this.openModal()
    });
  }

  public openModal(): void {
    this.modalService.open(this.exampleModal, { size: 'xl', backdrop: 'static' })
  }

  public newFeature() {
    this.modalService.open(this.newFeatureModal, { size: 'sm', backdrop: 'static' })
  }

}
