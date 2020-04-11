import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EventsComponent } from './components/events/events.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PrayerRequestComponent } from './components/prayer-request/prayer-request.component';
import { MediaComponent } from './components/media/media.component';
import { GiveComponent } from './components/give/give.component';
import { VideoComponent } from './components/media/components/video/video.component';
import { EventComponent } from './components/events/components/event/event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    ContactUsComponent,
    EventsComponent,
    FooterComponent,
    HomeComponent,
    PrayerRequestComponent,
    MediaComponent,
    GiveComponent,
    VideoComponent,
    EventComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
