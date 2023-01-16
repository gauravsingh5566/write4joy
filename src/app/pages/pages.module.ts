import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { WriteNewBookComponent } from './write-new-book/write-new-book.component';
import { ChangeLevelComponent } from './change-level/change-level.component';
import { MyBookShelfComponent } from './my-book-shelf/my-book-shelf.component';
import { CoursesComponent } from './courses/courses.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupportComponent } from './support/support.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    PagesComponent,
    WriteNewBookComponent,
    ChangeLevelComponent,
    MyBookShelfComponent,
    CoursesComponent,
    NotificationsComponent,
    MyProfileComponent,
    SubscriptionsComponent,
    ContactUsComponent,
    SupportComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
