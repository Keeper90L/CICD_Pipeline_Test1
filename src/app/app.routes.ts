import { Routes } from '@angular/router';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostFormComponent } from './pages/post-form/post-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  { path: 'posts/new', component: PostFormComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '**', redirectTo: 'posts' },
];