import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public posts: Array<any> = [
    {id: 1, text: "bloo bloo"},
    {id: 2, text: "bla bla"},
    {id: 3, text: "blee blee"}
  ]

  constructor() { }

  getPosts() {
    return this.posts
  }
}
