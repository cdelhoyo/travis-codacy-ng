import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, inject, async } from '@angular/core/testing';

import { UsersProxyService } from './users-proxy.service';

describe('UsersProxyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {provide: UsersProxyService, useClass: UsersProxyService, deps: [HttpClient]}
      ]
    });
  });

  it('should be created', inject([UsersProxyService], (service: UsersProxyService) => {
    expect(service).toBeTruthy();
  }));

  it('should get users from server', async(() => {
    const service: UsersProxyService = TestBed.get(UsersProxyService);
    service.getUsersFromServer().subscribe(
      response => {
        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull();
      }
    );
  }));

});
