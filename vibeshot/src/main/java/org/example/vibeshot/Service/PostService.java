package org.example.vibeshot.Service;

import org.example.vibeshot.Entity.Post;
import org.example.vibeshot.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List<Post> findAllPosts(){
        return postRepository.findAll();
    }

    public Post savePost(Post post){
        return postRepository.save(post);
    }
}
