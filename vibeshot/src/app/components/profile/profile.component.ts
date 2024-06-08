// import { Component, OnInit } from '@angular/core';
// import { ProfileService } from '../../services/profile.service';
// import { User } from '../../models/user';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   user: User | null = null;

//   constructor(private profileService: ProfileService) {}

//   ngOnInit() {
//     const userId = '1'; // Replace with dynamic user ID
//     this.profileService.getUserProfile(userId).subscribe(
//       data => {
//         this.user = data;
//       },
//       error => {
//         console.error(error);
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';

interface UserProfile {
  username: string;
  bio: string;
  posts: { title: string; content: string }[];
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserProfile = { username: '', bio: '', posts: [] };

  ngOnInit(): void {
    // Mock user data
    this.user = {
      username: 'CurrentUser',
      bio: 'This is the user bio',
      posts: [
        { title: 'First Post', content: 'This is the first post content' },
        { title: 'Second Post', content: 'This is the second post content' }
      ]
    };
  }
}
