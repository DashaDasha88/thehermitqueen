import { Component, OnInit, Input } from '@angular/core';
import { TextserviceService } from '../../services/textservice.service';
import { Posts } from '../../Posts';

@Component({
  selector: 'app-textframe',
  templateUrl: './textframe.component.html',
  styleUrls: ['./textframe.component.css']
})
export class TextframeComponent implements OnInit {

  posts: Posts[] = [];

  constructor(private textService: TextserviceService) { }

  ngOnInit(): void {
    this.textService.getText().subscribe((posts) => (this.posts = posts));
  }

}
