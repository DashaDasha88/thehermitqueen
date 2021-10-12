import { Component, OnInit, Input } from '@angular/core';
import { Posts } from '../../Posts';

@Component({
  selector: 'app-textbody',
  templateUrl: './textbody.component.html',
  styleUrls: ['./textbody.component.css']
})
export class TextbodyComponent implements OnInit {

  @Input() posts!: Text;

  constructor() { }

  ngOnInit(): void {
  }

}
