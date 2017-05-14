var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/blog/blog.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
export var firebaseConfig = {
    apiKey: 'Your firebase API key',
    authDomain: 'Your firebase Domain',
    databaseURL: 'Your firebase  URL',
    storageBucket: 'Your firebase storageBucket '
};
var firebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Popup
};
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'blog/:id', component: BlogsComponent },
    { path: 'add-blog', component: AddBlogComponent },
    { path: 'edit-listing/:id', component: EditBlogComponent }
];
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                BlogsComponent,
                NavbarComponent,
                ListingComponent,
                AddBlogComponent,
                EditBlogComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                FlashMessagesModule,
                AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
                RouterModule.forRoot(appRoutes)
            ],
            providers: [FirebaseService],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/developmnet/AngularFirebase/src/app/app.module.js.map