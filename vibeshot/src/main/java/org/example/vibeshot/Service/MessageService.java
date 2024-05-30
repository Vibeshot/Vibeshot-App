package org.example.vibeshot.Service;

import org.example.vibeshot.Entity.Message;
import org.example.vibeshot.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    public List<Message> getAllMessages(){
        return messageRepository.findAll();
    }
}
