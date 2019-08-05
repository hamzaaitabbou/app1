import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isauth = false;
  user = [
    {id: 1, nom: 'hamza', age: 20, status: false},
    {id: 2, nom: 'hamza', age: 20, status: false},
    {id: 3, nom: 'hamza', age: 20, status: false},
  ];
  on(index) {
    setTimeout(() => {
      this.user[index].status = true;
    }, 3000);
  }

  off(index) {
    this.user[index].status = false;
  }
  findUserById(id) {
    const user = this.user.find(
      s => {
        return s.id === id;
      }
    );
    return user;
  }

  constructor() { }
}
