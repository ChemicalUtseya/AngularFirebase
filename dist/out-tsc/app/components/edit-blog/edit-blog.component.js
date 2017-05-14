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
export var EditBlogComponent = (function () {
    function EditBlogComponent(firebaseService, router, route) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.firebaseService.getListingDetails(this.id).subscribe(function (listing) {
            _this.title = listing.title;
            _this.owner = listing.owner;
        });
    };
    EditBlogComponent.prototype.onEditSubmit = function () {
        var listing = {
            title: this.title,
            owner: this.owner,
        };
        this.firebaseService.updateListing(this.id, listing);
        this.router.navigate(['/blogs']);
    };
    EditBlogComponent = __decorate([
        Component({
            selector: 'app-edit-blog',
            templateUrl: './edit-blog.component.html',
            styleUrls: ['./edit-blog.component.css']
        }), 
        __metadata('design:paramtypes', [FirebaseService, Router, ActivatedRoute])
    ], EditBlogComponent);
    return EditBlogComponent;
}());
//# sourceMappingURL=E:/developmnet/AngularFirebase/src/app/components/edit-blog/edit-blog.component.js.map