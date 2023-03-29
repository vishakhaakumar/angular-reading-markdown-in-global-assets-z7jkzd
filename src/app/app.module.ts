import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [{ path: '', component: PostsComponent }];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [AppComponent, PostsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
