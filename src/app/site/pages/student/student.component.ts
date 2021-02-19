import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  @ViewChild('exampleModal', { static: true }) exampleModal: any;
  @ViewChild('newFeatureModal', { static: true }) newFeatureModal: any;

  public listStudents: any;
  public student: any;
  public form: FormGroup;
  public id = this.fb.control('');
  public name = this.fb.control('', {
    validators: [Validators.maxLength(100)]
  });

  constructor(public studentService: StudentService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.form = this.fb.group({
      id: this.id,
      name: this.name,
    });
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(response => {
      this.listStudents = response
    });
  }

  public saveNewStudent() {
    debugger
    if (this.form.valid) {
      var request = this.form.value;
      this.studentService.addStudent(request).subscribe((response) => {
        location.reload();
        this.clearForm();
      })
    }
  }

  public getStudentById(id: number) {
    this.studentService.getStudentById(id).subscribe(response => {
      this.student = response
      this.form.controls.id.setValue(this.student.id);
      this.form.controls['id'].disable();
      this.form.controls.name.setValue(this.student.name);
      this.openModal()
    });
  }

  public openModal(): void {
    this.modalService.open(this.exampleModal, { size: 'xl', backdrop: 'static' })
  }

  public updateStudent() {
    debugger
    if (this.form.valid) {
      var request = this.form.value;
      var id = this.form.controls.id.value
      this.studentService.updateStudent(request, id).subscribe((response) => {
        location.reload();
        this.clearForm();
      })
    }
  }

  public clearForm() {
    this.form.reset()
  }

  public newFeature() {
    this.modalService.open(this.newFeatureModal, { size: 'sm', backdrop: 'static' })
  }


}
