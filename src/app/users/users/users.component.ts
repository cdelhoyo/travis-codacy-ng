import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './../users.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users$: Observable<User[]>;
  originalUsers$: Observable<User[]>;
  subUsers: Subscription;

  constructor(private service: UsersService) { }

  ngOnInit() {
    this.users$ = this.service.getUsers();
    this.originalUsers$ = this.users$;
  }

  filter(username: string) {
    this.subUsers = this.service.filterByUsername(username, this.users$)
    .subscribe(users => {
      if (users.length === 0 && username === '') {
        this.users$ = this.originalUsers$;
      }else {
        this.users$ = of(users);
      }
    });
  }

  ngOnDestroy() {
    if (this.subUsers) {
      this.subUsers.unsubscribe();
    }
  }

}
