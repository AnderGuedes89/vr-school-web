import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './pages/course/course.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentComponent } from './pages/student/student.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ],
  },
  {
    path: 'alunos',
    children: [
      {
        path: '',
        component: StudentComponent,
      }
    ],
  },
  {
    path: 'cursos',
    children: [
      {
        path: '',
        component: CourseComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
