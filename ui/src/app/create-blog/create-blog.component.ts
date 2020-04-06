import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Blog} from '../model/blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  public blog;
  constructor(private router: Router) {
    this.blog = new Blog();
  }

  ngOnInit(): void {
  }

  goToBlogs(): void{
    this.router.navigate(['blogs']);
  }

  createBlog(): void{
    alert(this.blog.title);
    this.goToBlogs();
  }

}
