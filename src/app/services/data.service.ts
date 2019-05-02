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
  getPhotos(url: string): Observable<IPhotos[]> {
    return this.http.get<IPhotos[]>(url);
  }
}

