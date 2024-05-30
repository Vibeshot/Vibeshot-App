// src/app/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service'; // Assuming you have a UserService to fetch user data

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username!: string; // Non-null assertion operator
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username')!;
      if (this.username) {
        this.loadUserProfile();
      } else {
        console.error('Username is null');
      }
    });
  }

  loadUserProfile(): void {
    this.userService.getUser(this.username).subscribe(user => {
      this.user = user;
    });
  }
}

