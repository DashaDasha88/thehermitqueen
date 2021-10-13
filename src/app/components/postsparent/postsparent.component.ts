import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postsparent',
  templateUrl: './postsparent.component.html',
  styleUrls: ['./postsparent.component.css']
})
export class PostsparentComponent implements OnInit {

  public posts = [
    {"id": 1, "text": "bloo bloo"},
    {"id": 2, "text": "bla bla"},
    {"id": 3, "text": "blee blee"}
  ]

  public post = "This is my post";

  constructor() { }

  ngOnInit(): void {
  }

}
