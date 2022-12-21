import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) { }

  getcryptonews(){
    return this.http.get<any>(`https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=19275274e94a4abe99e5df2657cc5f86`);  }
}
