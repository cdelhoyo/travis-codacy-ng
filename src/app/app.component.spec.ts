import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UsersComponent } from './users/users/users.component';
import { UsersModule } from './users/users.module';
import { HttpClient, HttpClientModule, HttpEvent } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HttpResponse } from '@angular/common/http/src/response';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});
