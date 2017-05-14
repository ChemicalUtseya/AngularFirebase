import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  title: any;
  author: any;
  image: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    const listing = {
      title: this.title,
    };

    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);
  }

}
