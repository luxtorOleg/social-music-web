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
    headers.append('Content-Type', 'application/json');

    let to_send = { name: this.name, password: this.password, email: this.email };

    return this.http.put('http://localhost:3000/api/users/', JSON.stringify(to_send), new RequestOptions({ headers: headers }))
      .map(response => {
        let data = response.json(); //get actual response body from the response

        if (data.result) {
         alert('saved. your new id is: ' + data.result);
         } else {
         alert('error. message: ' + data.error.message);
         }
      })
      .subscribe(
        result => result, // return response to the chai call
        error => {
          if (error) {
            console.log(error);
          }
        }
      );
  }

}
