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
export var BlogsComponent = (function () {
    function BlogsComponent(firebaseService) {
        this.firebaseService = firebaseService;
    }
    BlogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.getListings().subscribe(function (listings) {
            console.log(listings);
            _this.listings = listings;
        });
    };
    BlogsComponent = __decorate([
        Component({
            selector: 'app-blogs',
            templateUrl: './blogs.component.html',
            styleUrls: ['./blogs.component.css']
        }), 
        __metadata('design:paramtypes', [FirebaseService])
    ], BlogsComponent);
    return BlogsComponent;
}());
//# sourceMappingURL=E:/developmnet/AngularFirebase/src/app/components/blogs/blogs.component.js.map