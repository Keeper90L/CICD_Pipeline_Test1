import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import id from '@angular/common/locales/extra/id';

@Component({
  selector: 'app-post-detail',
  imports: [AsyncPipe,RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})


export class PostDetailComponent {

  posts$!: Observable<Post>;

  constructor(private route: ActivatedRoute, private postsService: PostsService,
     private router: Router) {
    this.posts$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.postsService.getById(id);
      })
    );
  }
  deletePost(id:number){
    const ok = confirm ('¿Estás seguro de que deseas eliminar este post?');
    if (!ok) return ;
  

  this.postsService.delete(id).subscribe({
    next: () => this.router.navigate(['/posts']),
    error: (e) => console.error('Error borrando post:', e)
  });
  
} 
}
