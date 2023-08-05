import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component:DashboardComponent},
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'table-list', component:TableListComponent },
  { path: 'notification', component:NotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
