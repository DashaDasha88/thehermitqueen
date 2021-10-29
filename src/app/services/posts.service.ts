import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '../Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'http://localhost:5000/posts';

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  deletePosts(post: Post): Observable<Post> {
    const url = `${this.apiUrl}/${post.id}`
    return this.http.delete<Post>(url);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post, httpOptions);
  }

}
