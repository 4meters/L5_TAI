import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() id: number;
  @Input() image: string | undefined;
  @Input() text: string | undefined;
  @Input() title= ' ';

  constructor() { }

  ngOnInit(): void {
  }

}