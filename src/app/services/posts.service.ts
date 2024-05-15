import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsUrl = environment.endpoints.posts;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http
      .get<any[]>(this.postsUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('An error occurred during fetching posts data:', error);
    return [];
  }
}
