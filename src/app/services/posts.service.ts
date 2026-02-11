import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post'; 
import id from '@angular/common/locales/extra/id';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Post> (`${this.url}/${id}`);
  }

  create(post:Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  }

  delete(id: number) {
  return this.http.delete<void>(`${this.url}/${id}`);
  }
  
}