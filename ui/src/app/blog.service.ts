import { Injectable } from '@angular/core';
import {Blog} from './model/blog';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  createBlog(blog: Blog) {
    console.log(blog);
    this.http.post(`${environment.endpoint}/api/blogs`, blog)
        .subscribe(res => console.log('Done' + res));
  }

}
