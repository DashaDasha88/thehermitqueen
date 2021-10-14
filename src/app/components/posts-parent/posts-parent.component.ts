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

}
