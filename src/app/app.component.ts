import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  originalUsers: any[];
  users: any[];

  constructor(private httpClient: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      users => {
        this.originalUsers = users;
        this.users = users;
      }
    );
  }

  filter(username: string) {
    let matched = false;
    this.users.forEach(user => {
      if (user.username === username) {
        matched = true;
        this.users = [];
        this.users.push(user);
      }
    });
    if (this.users.length === 0 || !matched) {
      this.users = this.originalUsers;
    }
  }

}
