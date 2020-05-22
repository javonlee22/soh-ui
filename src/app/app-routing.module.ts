import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';
import { PrayerComponent } from './prayer/prayer.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: MainComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'prayer', component: PrayerComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
