import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public listStudents: any;

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(response => {
      this.listStudents = response
      console.log(this.listStudents)
    });
  }

}
