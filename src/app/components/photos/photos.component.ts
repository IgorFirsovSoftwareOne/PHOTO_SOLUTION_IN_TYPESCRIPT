import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: IPhotos[];
  slicedPhotos: IPhotos[];
  pageCounter = 0;
  pageSize = 51;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPhotos().subscribe(photos => {
      this.photos = photos;
      this.slicedPhotos = this.photos.slice(this.pageCounter, this.pageSize);
      this.pageSize += 51;
    });
  }

  loadPhotos() {
    this.slicedPhotos = this.photos.slice(this.pageCounter, this.pageSize);
    this.pageSize += 51;

    if (this.pageSize >= 250 ) {
      this.pageCounter += 51;
    }

  }
}
