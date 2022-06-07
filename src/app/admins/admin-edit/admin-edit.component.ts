import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminsService } from 'src/app/services/admins.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private adminService : AdminsService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.adminService.getUser(id).subscribe((data) => {
      console.log(data);
      this.user = data
    })
  }

}
