import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { StatisticComponent } from './statistic/statistic.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'statistic', component: StatisticComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'contactus', component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
