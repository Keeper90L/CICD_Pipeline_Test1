import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsService } from './services/posts.service';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'posts-get';
  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getAll();
  }
}
