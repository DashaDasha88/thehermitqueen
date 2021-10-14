import { Injectable } from '@angular/core';
import { POSTS } from '../mock-posts';
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Post[] {
    return POSTS;
  }
}
