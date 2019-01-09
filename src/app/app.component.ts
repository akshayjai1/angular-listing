import { Component } from '@angular/core';
import {UserServiceService} from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserServiceService]
})
export class AppComponent {
  constructor(private userService: UserServiceService){

  }
  users = [];
  temp = this.userService.getData().then(res => {this.users = this.userService.users});
  //title = this.userService.users;
}
