import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Environment} from "../../environments/interface";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  constructor(private http: HttpClient) {}
  private keys : Environment = environment;
  getPhoto(query:string){
    const url:string = `https://api.unsplash.com/search/photos?client_id=${environment.apiUnsplash}&page=1&query=${query}`;
    return this.http.get(url);
  }
}
