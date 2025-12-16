import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidebar-student',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './sidebar-student.component.html',
  styleUrl: './sidebar-student.component.scss'
})
export class SidebarStudentComponent {

}
