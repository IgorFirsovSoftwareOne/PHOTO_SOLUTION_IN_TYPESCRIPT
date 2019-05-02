import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatCardModule } from '@angular/material';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {


  constructor(private dataService: DataService) {
  }

  photos: any;
  ngOnInit() {
    this.dataService.getPhotos('http://jsonplaceholder.typicode.com/photos')
    .subscribe( photos => this.photos = photos);
  }
}
