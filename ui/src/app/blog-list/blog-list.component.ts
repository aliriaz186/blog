import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public blogList;
  constructor() {
    this.blogList = [{title : 'Ali'}, {title : 'Talha'}, {title : 'Hassan'}];
  }

  ngOnInit(): void {
  }

}
