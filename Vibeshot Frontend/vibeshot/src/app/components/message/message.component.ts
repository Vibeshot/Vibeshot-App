import { Component, OnInit } from '@angular/core';

interface Message {
  sender: string;
  content: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';

  ngOnInit(): void {
    // Mock messages data
    this.messages = [
      { sender: 'User1', content: 'Hello!' },
      { sender: 'CurrentUser', content: 'Hi there!' }
    ];
  }

  sendMessage(): void {
    if (this.newMessage) {
      this.messages.push({ sender: 'CurrentUser', content: this.newMessage });
      this.newMessage = '';
    }
  }
}
