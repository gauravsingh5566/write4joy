import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeLevelComponent } from './change-level/change-level.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { LogoutComponent } from './logout/logout.component';
import { MyBookShelfComponent } from './my-book-shelf/my-book-shelf.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SupportComponent } from './support/support.component';
import { WriteNewBookComponent } from './write-new-book/write-new-book.component';

const routes: Routes = [
  {
     path: 'write-new-book',
     component: WriteNewBookComponent
  },
  {
     path: 'my-book-shelf',
     component: MyBookShelfComponent
  },
  {
     path: 'courses',
     component: CoursesComponent
  },
  {
    path: 'change-level',
    component: ChangeLevelComponent
  },
  {
     path: 'notifications',
     component: NotificationsComponent
  },
  {
     path: 'my-profile',
     component: MyProfileComponent
  },
  {
     path: 'subscriptions',
     component: SubscriptionsComponent
  },
  {
     path: 'contact-us',
     component: ContactUsComponent
  },
  {
     path: 'support',
     component: SupportComponent
  },
  {
     path: 'logout',
     component: LogoutComponent
  },
  {
     path: '',
     redirectTo: 'write-new-book',
     pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
