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
import { Router } from '@angular/router';
export var AddBlogComponent = (function () {
    function AddBlogComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AddBlogComponent.prototype.ngOnInit = function () {
    };
    AddBlogComponent.prototype.onAddSubmit = function () {
        var listing = {
            title: this.title,
        };
        this.firebaseService.addListing(listing);
        this.router.navigate(['listings']);
    };
    AddBlogComponent = __decorate([
        Component({
            selector: 'app-add-listing',
            templateUrl: './add-blog.component.html',
            styleUrls: ['./add-blog.component.css']
        }), 
        __metadata('design:paramtypes', [FirebaseService, Router])
    ], AddBlogComponent);
    return AddBlogComponent;
}());
//# sourceMappingURL=E:/developmnet/AngularFirebase/src/app/components/add-blog/add-blog.component.js.map