import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'app/user-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

constructor(private userService: UserServiceService){

  }
  users = [];
  temp = this.userService.getData().subscribe(
    res => {
      console.log(res)
      this.users = JSON.parse(res._body);
      debugger;
    }, msg => {
            // Error
            console.log('error');
            debugger;
            // reject(msg);
          })
  ngOnInit() {
  }

}
