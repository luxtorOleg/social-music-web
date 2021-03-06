import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http:Http) { }

  getAllUsers() {
  	return this.http
  		.get('http://localhost:3000/api/users/')
  		.map(res => res.json());
  }
}
