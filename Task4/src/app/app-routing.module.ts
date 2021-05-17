import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDetailsComponent } from './all-details/all-details.component';
import { CourseWithoutFacultyComponent } from './course-without-faculty/course-without-faculty.component';
import { CourseComponent } from './course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'all',component:AllDetailsComponent},
  {path:'course',component:CourseComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'home',component:HomeComponent},
  {path:'course-without-faculty',component:CourseWithoutFacultyComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
