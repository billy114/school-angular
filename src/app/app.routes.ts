import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {StudentLayoutComponent} from './layouts/student-layout/student-layout.component';
import {HomeStudentComponent} from './pages/home-student/home-student.component';
import {ProfilComponent} from './pages/profil/profil.component';
import {CoursComponent} from './pages/cours/cours.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: StudentLayoutComponent , children: [
    {path: '', component: HomeStudentComponent},
      {path : 'profil', component : ProfilComponent},
      {path : 'cours', component : CoursComponent}
    ]
  },

];
