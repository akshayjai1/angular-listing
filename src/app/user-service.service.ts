import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class UserServiceService {
  users = [];
  constructor(private http: Http) {
  }
  getData(){
    let promise = new Promise((resolve, reject) => {
      let apiURL = `http://dummy.restapiexample.com/api/v1/employees`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          res => {
            // Success
            const obj = res.json();
            for(var o in obj)
              this.users.push({employee_name: obj[o].employee_name,
                              id: obj[o].id,
                            employee_age: obj[o].employee_age,
                          employee_salary: obj[o].employee_salary,});
            resolve();
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
    // return this.http.get('http://dummy.restapiexample.com/api/v1/employees').toPromise()
    //             .then( res => {
    //               this.users = res.map(item => {
    //           return new SearchItem(
    //             item.trackName,
    //             item.artistName,
    //             item.trackViewUrl,
    //             item.artworkUrl30,
    //             item.artistId
    //           );
    //         });
    //             .subscribe(response => this.users = response);
  }
}
