import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { map, filter, switchMap } from 'rxjs/operators';
import { PhotosComponent } from '../components/photos/photos.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http: HttpClient) {
  }

  readonly pageSize = 50;
  getPhotos(pageCounter, size): Observable<IPhotos[]> {
    pageCounter++;
    return this.http.get<IPhotos[]>('https://jsonplaceholder.typicode.com/photos');
  }
}

