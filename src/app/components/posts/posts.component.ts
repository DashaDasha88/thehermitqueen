import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Array<any> = [
    {id: 1, text: "bloo bloo"},
    {id: 2, text: "bla bla"},
    {id: 3, text: "blee blee"}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
