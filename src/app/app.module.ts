import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { MediaComponent } from './media/media.component';
import { PrayerComponent } from './prayer/prayer.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { VideoItemComponent } from './video-item/video-item.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { EventItemComponent } from './event-item/event-item.component';
import { ServicesComponent } from './services/services.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    EventsComponent,
    NewsComponent,
    MediaComponent,
    PrayerComponent,
    ContactComponent,
    VideoItemComponent,
    NewsItemComponent,
    EventItemComponent,
    ServicesComponent,
    LeadershipComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
