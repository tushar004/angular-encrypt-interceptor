import { Injectable } from '@angular/core';
import { EncryptService } from './encrypt.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EncryptInterceptor implements HttpInterceptor {

  secretKey='123456$#@$^@1ERF';

  constructor(private encrypt: EncryptService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const body = this.encrypt.set(this.secretKey, JSON.stringify(request.body));
    const newReq = request.clone({
     body: body
      })
      console.log(this.encrypt.get(this.secretKey, body))
    return next.handle(newReq);
  }
}
