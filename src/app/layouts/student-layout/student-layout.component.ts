import { Component } from '@angular/core';
import {HeaderStudentComponent} from '../../components/header-student/header-student.component';
import {SidebarStudentComponent} from '../../components/sidebar-student/sidebar-student.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [
    HeaderStudentComponent,
    SidebarStudentComponent,
    RouterOutlet
  ],
  templateUrl: './student-layout.component.html',
  styleUrl: './student-layout.component.scss'
})
export class StudentLayoutComponent {

}
