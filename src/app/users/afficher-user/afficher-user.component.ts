import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-afficher-user',
  templateUrl: './afficher-user.component.html',
  styleUrls: ['./afficher-user.component.css']
})
export class AfficherUserComponent implements OnInit {
  @Input() nom;
  @Input() age;
  @Input() status;
  @Input() user;
  @Input() index;
  @Input() id;

  constructor(private serUser: UserService, private route: Router) { }

  ngOnInit() {
    this.user = this.serUser.user;
  }

  on() {
    this.serUser.on(this.index);
    this.user = this.serUser.user;

  }

  off() {
    if (confirm('vous etes sur !!!')) {
      this.serUser.off(this.index);
      this.user = this.serUser.user;
    } else { return null; }

  }

  more() {
  }
}
