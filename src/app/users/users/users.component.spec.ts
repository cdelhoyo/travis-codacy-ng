import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProxyService } from '../users-proxy.service';
import { UsersProxyServiceFake } from '../users-proxy.service.fake';
import { UsersService } from '../users.service';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      providers: [
        {provide: UsersProxyService, useClass: UsersProxyServiceFake},
        {provide: UsersService, useClass: UsersService, deps: [UsersProxyService]}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set users', () => {
    component.ngOnInit();
    expect(component.users$).not.toBeNull();
    component.users$.subscribe(
      users => {
        expect(users[0].username).toBe('Bret');
      }
    );
    component.ngOnDestroy();
  });

  it('should filter users by username', () => {
    component.ngOnInit();
    component.filter('Bret');
    component.users$.subscribe(
      users => {
        expect(users.length).toBe(1);
      }
    );
    component.filter('');
    component.users$.subscribe(
      users => expect(users.length).toBe(10)
    );
    component.filter('no-exists');
    component.users$.subscribe(
      users => expect(users.length).toBe(0)
    );
    component.ngOnDestroy();
  });

});
