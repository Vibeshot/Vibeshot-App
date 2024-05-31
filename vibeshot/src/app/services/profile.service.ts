// src/app/services/profile.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile: Profile = {
    name: 'John Doe',
    bio: 'Software Developer at XYZ Company',
    posts: [
      {
        id: 1,
        title: 'First Post',
        content: 'This is my first post!',
        likes: 10,
        comments: [
          { username: 'Alice', content: 'Great post!' },
          { username: 'Bob', content: 'Thanks for sharing!' }
        ]
      },
      // more posts...
    ]
  };

  getProfile(): Observable<Profile> {
    return of(this.profile);
  }

  updateProfile(profile: Profile): void {
    this.profile = profile;
  }
}
