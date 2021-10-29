import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-posts-parent',
  templateUrl: './posts-parent.component.html',
  styleUrls: ['./posts-parent.component.css']
})
export class PostsParentComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => this.posts = posts);
  }

  deletePost(post: Post) {
    this.postService.deletePosts(post).subscribe(() => (this.posts = this.posts.filter((p) => p.id !== post.id)));
  }

   addPost(post : Post) {
     this.postService.addPost(post)
     .subscribe((post) => (this.posts.push(post)));
  }

}
