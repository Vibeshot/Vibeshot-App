// src/app/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'c:/Users/Thomas/Documents/Vibeshot/vibeshot/src/app/services/profile.service';
import { Profile } from 'c:/Users/Thomas/Documents/Vibeshot/vibeshot/src/app/models/profile.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  editProfileForm: FormGroup;
  editMode: boolean = false;

  constructor(private profileService: ProfileService, private fb: FormBuilder) {
    this.editProfileForm = this.fb.group({
      name: ['', Validators.required],
      bio: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(profile => {
      this.profile = profile;
      this.editProfileForm.setValue({
        name: profile.name,
        bio: profile.bio
      });
    });
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  saveProfile(): void {
    if (this.editProfileForm.valid) {
      const updatedProfile: Profile = {
        ...this.profile,
        ...this.editProfileForm.value
      };
      this.profileService.updateProfile(updatedProfile);
      this.profile = updatedProfile;
      this.editMode = false;
    }
  }

  likePost(postId: number): void {
    const post = this.profile.posts.find(p => p.id === postId);
    if (post) {
      post.likes++;
    }
  }
}
