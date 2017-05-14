var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
export var ListingComponent = (function () {
    function ListingComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get ID
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.listing = listing;
            var storageRef = firebase.storage().ref();
            var spaceRef = storageRef.child(_this.listing.path);
            storageRef.child(_this.listing.path).getDownloadURL().then(function (url) {
                // Set image url
                _this.imageUrl = url;
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    ListingComponent.prototype.onDeleteClick = function () {
        this.firebaseService.deleteListing(this.id);
        this.router.navigate(['/blogs']);
    };
    ListingComponent = __decorate([
        Component({
            selector: 'app-blog',
            templateUrl: './blog.component.html',
            styleUrls: ['./blog.component.css']
        }), 
        __metadata('design:paramtypes', [FirebaseService, Router, ActivatedRoute])
    ], ListingComponent);
    return ListingComponent;
}());
//# sourceMappingURL=E:/developmnet/AngularFirebase/src/app/components/blog/blog.component.js.map