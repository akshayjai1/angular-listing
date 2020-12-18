import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserServiceService {
  users = [];
  constructor(private http: Http) {
  }
  getData(): Observable<any> {
    let apiURL = `https://jsonplaceholder.typicode.com/todos`;
    // let apiURL = `http://dummy.restapiexample.com/api/v1/employees`;
    return this.http.get(apiURL);
  }
}
  // }




/*         .subscribe(
          res => {
            // Success
            console.log(res)
            debugger;
 *//*             const obj = res.json();
            for(var o in obj)
              this.users.push({employee_name: obj[o].employee_name,
                              id: obj[o].id,
                            employee_age: obj[o].employee_age,
                          employee_salary: obj[o].employee_salary,});
            resolve(); */
/*           },
          msg => {
            // Error
            console.log('error');
            debugger;
            // reject(msg);
          }
        );
    } *//* )

    let promise = new Promise((resolve, reject) => {
      let apiURL = `http://dummy.restapiexample.com/api/v1/employees`;
      ;
    return promise; */
