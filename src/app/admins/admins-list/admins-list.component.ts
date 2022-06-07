import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import { AdminsService } from 'src/app/services/admins.service';
import { AdminCreateComponent } from '../admin-create/admin-create.component';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {
  users: any[] = [];

  constructor(private adminService: AdminsService, private modal: NgbModal,) { }

  ngOnInit(): void {
    // forkJoin([this.adminService.getAllUsers(), this.adminService.getAllSections()]).subscribe((resp) => {
    //   console.log(resp);
    // })

    this.adminService.getAllUsers().subscribe((data) => {
      if(Array.isArray(data)){
        this.users = data 
        console.log(data);   
      }  
    })

    this.adminService.getUsers().subscribe((response: any) => {
      console.log(response);
    })
  }

  create(){
    this.modal.open(AdminCreateComponent).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
      this.users.push(reason)
    });
  }

  update(record:object){
    this.adminService.setAdminData(record)
    this.modal.open(AdminCreateComponent).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
      const findAdminIndex = this.users.findIndex(i => i.id === reason.id);
      if(findAdminIndex !== -1){
        this.users[findAdminIndex] = reason
      }
    });
  }

  onDelete(id:any){
    this.adminService.deleteUser(id).subscribe((response:any) => {
      console.log(response);
      const findAdminIndex = this.users.findIndex(i => i.id === response.id);
      if(findAdminIndex !== -1){
        this.users.splice(findAdminIndex, 1)
      }
    })
  }

}
