import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public listStudents: any;
  public form: FormGroup;
  public name = this.fb.control('', {
    validators: [Validators.maxLength(100)]
  });

  constructor(public studentService: StudentService, private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: this.name,
    });
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(response => {
      this.listStudents = response
      console.log(this.listStudents)
    });
  }

  public saveNewStudent() {
    debugger
    if (this.form.valid) {
      var request = this.form.value;
      this.studentService.addStudent(request).subscribe((response) => {
        console.log(request);
        location.reload();
      })
    }
  }

}
