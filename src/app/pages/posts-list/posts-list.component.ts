import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  imports: [RouterLink,AsyncPipe],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {

  posts$!: Observable<Post[]>;

  constructor(private postsService: PostsService) {
    this.posts$ = this.postsService.getAll();
    }

}
