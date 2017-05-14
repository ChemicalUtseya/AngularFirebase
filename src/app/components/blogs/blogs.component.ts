import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  listings:any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(listings => {
      console.log(listings);
      this.listings = listings;
    });
  }

}
