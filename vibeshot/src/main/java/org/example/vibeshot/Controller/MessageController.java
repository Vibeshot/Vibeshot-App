package org.example.vibeshot.Controller;

import org.example.vibeshot.Entity.Message;
import org.example.vibeshot.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping("/messages")
    public List<Message> getMessages(){
        return messageService.getAllMessages();
    }

    @PostMapping("/messages")
    public Message sendMessage(@RequestBody Message message){
        return messageService.saveMessage(message);
    }
}
