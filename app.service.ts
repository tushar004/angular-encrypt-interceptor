import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/** rxjs */
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError, Subject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor(private http: HttpClient,) { }

test() {
  const body = {
    a:32e424234,
    b: '2323wfsfwefw'
  }
  return this.http.post('',body).pipe(
    map((data: any) => data),
    catchError((error) => throwError(error)),
  );
}
}


