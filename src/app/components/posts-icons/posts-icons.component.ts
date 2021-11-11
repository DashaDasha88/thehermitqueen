import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Post } from 'src/app/Post';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts-icons',
  templateUrl: './posts-icons.component.html',
  styleUrls: ['./posts-icons.component.css']
})
export class PostsIconsComponent implements OnInit {

  @Input() post!: Post;
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter();

  faTimes = faTimes;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }


  onDelete(post: any) {
    this.onDeletePost.emit(post);
  }

}
