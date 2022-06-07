import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEditComponent } from './admins/admin-edit/admin-edit.component';
import { AdminsListComponent } from './admins/admins-list/admins-list.component';
import { AdminsComponent } from './admins/admins.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'admin', pathMatch:'full'
  },
  {
    path: 'admin', component: AdminsComponent,
    children: [
      {
        path: 'list', component: AdminsListComponent
      },
      {
        path: 'list/:id', component: AdminEditComponent
      }
    ]
  },
  {
    path: 'user', component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
