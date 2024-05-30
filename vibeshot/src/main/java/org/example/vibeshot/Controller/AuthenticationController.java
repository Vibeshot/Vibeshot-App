package org.example.vibeshot.Controller;

import org.example.vibeshot.Entity.User;
import org.example.vibeshot.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return "Welcome, " + authentication.getName() + "!";
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user){
        userService.saveUser(user);
        return "User registered successfully";
    }

    @GetMapping("/home")
    public String home(){
        return "Welcome to Home Page!";
    }
}
