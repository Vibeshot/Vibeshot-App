import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser(): Observable<User> {
    const user: User = {
      name: 'Thomas Birt',
      bio: 'Java Fullstack Developer',
      posts: [
        { id: 1, content: 'I love bacon.' },
        { id: 2, content: 'America.' }
      
      ]
    };
    return of(user);
  }

  constructor() { }
}
