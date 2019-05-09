import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {}

  photos: IPhotos[];

  getPhotos(): Observable<IPhotos[]> {
    return this.http.get<IPhotos[]>('https://jsonplaceholder.typicode.com/photos');
  }
}

