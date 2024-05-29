package org.example.vibeshot.Controller;

import org.example.vibeshot.Entity.User;
import org.example.vibeshot.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProfileController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public User getProfile(){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userService.findByUsername(userDetails.getUsername());
    }
}
