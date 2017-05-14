import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  id;
  title;
  owner;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.title = listing.title;
      this.owner = listing.owner;
    });
  }

  onEditSubmit()
  {
    const listing = {
        title: this.title,
        owner: this.owner,
    };

    this.firebaseService.updateListing(this.id, listing);

    this.router.navigate(['/blogs']);
  }

}
