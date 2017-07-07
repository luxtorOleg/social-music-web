import { Component} from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {User} from './User';

@Component({
  selector: 'user-r',
  templateUrl: './userRegistration.component.html',
  styleUrls: ['./userRegistration.component.css']
})
@Injectable()
export class UserRegistration{
  name:string;
  email:string;
  password:string;
  constructor(private http: Http) { }

  registration() {
    console.log(this.name);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.put(
      'http://localhost:3000/api/users/',
      JSON.stringify({ name: this.name, password: this.password,email: this.email }),
      new RequestOptions({ headers: headers }))
      .map((response: Response) => {
         //login successful if there's a jwt token in the response
       //let user = response.json();
        //if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
       // }
        console.log(response.json());
        //return user;
      });
  }

}
