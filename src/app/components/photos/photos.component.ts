import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatPaginator } from '@angular/material';



@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: IPhotos[];
  pageCounter = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
  this.dataService.getPhotos(0, 50).subscribe(photos => this.photos = photos);

  }
}
