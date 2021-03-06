import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { ListsComponent } from './lists/lists.component';
import { BannerCardComponent } from './banner-card/banner-card.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PostComponent } from './post/post.component';

@NgModule({
  //Holds components
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    TasksComponent,
    CardComponent,
    ButtonComponent,
    ImageComponent,
    ListsComponent,
    BannerCardComponent,
    ProfilesComponent,
    PostComponent
  ],
  // Holds Modules.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Template Form
    ReactiveFormsModule // Reactive Form
  ],
  // Hold Services
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
