import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) { }

  private readonly adminData = new BehaviorSubject<any>({});
  readonly adminData$ = this.adminData.asObservable();

  setAdminData(data:Object): void {
    this.adminData.next(data);
  }

  getAllUsers(){
    return this.http.get('https://629882c6f2decf5bb74472c7.mockapi.io/api/v1/users');
  }

  getUser(id:number){
    return this.http.get('https://629882c6f2decf5bb74472c7.mockapi.io/api/v1/users/'+id);
  }

  CreateUser(data:Object){
    return this.http.post('https://629882c6f2decf5bb74472c7.mockapi.io/api/v1/users', data);
  }

  updateUser(data:any){
    return this.http.put('https://629882c6f2decf5bb74472c7.mockapi.io/api/v1/users/'+data.id, data);
  }

  deleteUser(id:Number){
    return this.http.delete('https://629882c6f2decf5bb74472c7.mockapi.io/api/v1/users/'+id);
  }

  getAllSections(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
