import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsComponent } from './admins.component';
import { AdminsListComponent } from './admins-list/admins-list.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminsComponent,
    AdminsListComponent,
    AdminCreateComponent,
    AdminEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[]
})
export class AdminsModule { }
