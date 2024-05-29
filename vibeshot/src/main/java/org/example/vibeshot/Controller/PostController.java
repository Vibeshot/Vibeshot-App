package org.example.vibeshot.Controller;

import org.example.vibeshot.Entity.Post;
import org.example.vibeshot.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {
    @Autowired
    private PostService postService;

    @GetMapping
    public List<Post> getAllPosts(){
        return postService.findAllPosts();
    }

    @PostMapping
    public Post createPost(@RequestBody Post post){
        return postService.savePost(post);
    }
}
