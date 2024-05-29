import { Component } from '@angular/core';

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrl: './dm.component.css'
})
export class DmComponent {
  message: string = ''; // Property to store the message

  constructor() { }

  sendMessage() {
    console.log('Message sent:', this.message);
    // code to send message to backend goes here
    this.message = '';
  }

}
