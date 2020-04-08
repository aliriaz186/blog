import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Blog} from '../model/blog';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  public blog;
  constructor(private router: Router, private blogService: BlogService) {
    this.blog = new Blog();
  }

  ngOnInit(): void {
  }

  goToBlogs(): void{
    this.router.navigate(['blogs']);
  }

  createBlog(): void{
    if (this.blog.validate()){
      this.blog.titleError = false;
      this.blogService.createBlog(this.blog);
      this.goToBlogs();
    }else{
      this.blog.titleError = true;
    }
  }

}
