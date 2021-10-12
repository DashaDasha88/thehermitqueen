import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Posts } from '../Posts';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})

export class TextserviceService {

  private apiUrl = 'http://localhost:5000/posts';

  constructor(private http: HttpClient) { }

  getText(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiUrl);
  }
}
