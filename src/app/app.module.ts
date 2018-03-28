import { UsersProxyService } from './users/users-proxy.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    UsersModule,
    BrowserModule
  ],
  providers: [
    {provide: UsersProxyService, useClass: UsersProxyService, deps: [HttpClient]},
    {provide: UsersService, useClass: UsersService, deps: [UsersProxyService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
