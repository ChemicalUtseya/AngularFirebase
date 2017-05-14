import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/blog/blog.component';
import {AddBlogComponent} from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';

export const firebaseConfig = {
  apiKey: 'Your firebase API key',
  authDomain: 'Your firebase Domain',
  databaseURL: 'Your firebase  URL',
  storageBucket: 'Your firebase storageBucket '
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'blog/:id', component: BlogsComponent},
  {path: 'add-blog', component:  AddBlogComponent},
  {path: 'edit-listing/:id', component: EditBlogComponent}
];

@NgModule({
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
})
export class AppModule { }
