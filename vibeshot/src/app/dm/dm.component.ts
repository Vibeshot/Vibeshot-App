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
    // Handle sending the message (e.g., send it to the backend)
    console.log('Message sent:', this.message);
    // You can add code here to send the message to the backend
    // For now, let's just log it to the console
    this.message = '';
  }

}
