import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminsService } from 'src/app/services/admins.service';
import { AdminsListComponent } from '../admins-list/admins-list.component';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit, OnDestroy {
  submitted:boolean = false
  addAdminForm: FormGroup;
  isEdit: boolean = false;
  selectedData:any = {}
  constructor(private fb: FormBuilder, private modal: NgbModal, private adminService: AdminsService) {
    this.addAdminForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phoneNumber: ['', [Validators.required,Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    })
   }

  ngOnInit() {
    this.adminService.adminData$.subscribe((data:any) => {
      if(data.id){
        this.isEdit = true
        this.loadApiMethod(data)
        this.selectedData = data
      }
    })
  }

  loadApiMethod(data:any) {
    // this.addAdminForm.setValue({
    this.addAdminForm.patchValue({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
    })
  }

  onSubmit(){
    this.submitted = true
    if(!this.addAdminForm.valid) {
      // alert('Please fill all the required fields')
      // return false;
    } else {
      if(this.isEdit){
        this.selectedData['firstName'] = this.firstName?.value
        this.selectedData['lastName'] = this.lastName?.value
        this.selectedData['email'] = this.email?.value
        this.selectedData['phoneNumber'] = this.phoneNumber?.value
        console.log(this.selectedData);
        this.adminService.updateUser(this.selectedData).subscribe((response) => this.successCallBack(response))
      }else{
        this.selectedData['firstName'] = this.firstName
        console.log(this.addAdminForm.value)
        this.addAdminForm.value['status'] = "status" + Math.random()
        this.adminService.CreateUser(this.addAdminForm.value).subscribe((response) => this.successCallBack(response))
      }
    }
  }
  successCallBack(response: Object) {
    this.modal.dismissAll(response);
  }

  get firstName(){
    return this.addAdminForm.get('firstName')
  }
  get lastName(){
    return this.addAdminForm.get('lastName')
  }
  get email(){
    return this.addAdminForm.get('email')
  }
  get phoneNumber(){
    return this.addAdminForm.get('phoneNumber')
  }

  ngOnDestroy(): void {
    this.adminService.setAdminData({});
  }
}
