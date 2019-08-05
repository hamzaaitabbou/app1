import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user;
  constructor(private userServec: UserService) { }

  ngOnInit() {
    this.user = this.userServec.user;
  }

}
