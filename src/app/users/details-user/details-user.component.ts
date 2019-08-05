import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  nom;
  age;
  status;
  id;
  constructor(private servUser: UserService, private activatedR: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedR.snapshot.params.id;
    this.nom = this.servUser.findUserById(+this.id).nom;
    this.age = this.servUser.findUserById(+this.id).age;
    this.status = this.servUser.findUserById(+this.id).status;

  }

}
