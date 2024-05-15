import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public posts: any;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((response) => {
      this.posts = response.mainPagePosts.content;
    });
  }
}
