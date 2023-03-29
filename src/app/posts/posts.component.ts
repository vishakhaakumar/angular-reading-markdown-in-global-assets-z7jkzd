import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  post: string;
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.post = await this.http
      .get(`/assets/posts/home.md`, { responseType: 'text' })
      .toPromise();
  }
}
