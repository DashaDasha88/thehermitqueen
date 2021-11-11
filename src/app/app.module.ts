import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import { PostsService } from './services/posts.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsParentComponent } from './components/posts-parent/posts-parent.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';

const appRoutes: Routes = [
  {path: '', component: FrontpageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsParentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsParentComponent,
    PostsComponent,
    AddPostComponent,
    AboutComponent,
    NavbarComponent,
    FrontpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
