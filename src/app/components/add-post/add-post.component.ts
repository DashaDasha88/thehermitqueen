import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/Post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter;

  text: string = "";

  title: string = "Seriously, Dasha?"

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.title);

    // const newPost = {
    //   text: this.text
    // };

    // this.onAddPost.emit(newPost);

    // this.text = ''; //this should clear the form after you post
  }

}
