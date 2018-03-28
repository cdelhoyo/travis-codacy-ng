import { UsersProxyServiceFake } from './users-proxy.service.fake';
import { HttpClientModule } from '@angular/common/http';
import { UsersProxyService } from './users-proxy.service';
import { TestBed, inject, async } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {provide: UsersService, useClass: UsersService, deps: [UsersProxyService]},
        {provide: UsersProxyService, useClass: UsersProxyServiceFake}
      ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should create users', () => {
    const service: UsersService = TestBed.get(UsersService);
    service.getUsers().subscribe(
      users => {
        expect(users[0].id).toBe(1);
        expect(users[1].username).toEqual('Antonette');
      }
    );
  });

});
