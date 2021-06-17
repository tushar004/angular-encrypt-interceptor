import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncryptInterceptor } from './encrypt.interceptor';

import { EncryptService } from './encrypt.service';
import { AppService } from './app.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: EncryptInterceptor, multi: true },
    AppService,
    EncryptService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
