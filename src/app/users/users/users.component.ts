import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  param: any;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.param = params['jwt']
    })
  }

  multipleParamsWithSameKey() {
    this.router.navigateByUrl('/?brand=name&brand=bjk&value=1000')
  }

}
