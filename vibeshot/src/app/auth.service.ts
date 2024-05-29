import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): Observable<boolean> {

    if (username === 'user' && password === 'password') {
      return of(true);
    }
    return of(false);
  }

  constructor() { }
}
