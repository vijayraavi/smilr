import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent }         from './home.component';
import { EventListComponent }    from './event-list.component';
import { FeedbackComponent }     from './feedback.component';

import { FeedbackListComponent } from './admin/feedback-list.component';
import { AdminComponent }        from './admin/admin.component';
import { UserService }        from './admin/user.service';
import { AppSvcLogin }        from './admin/app-svc-login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventListComponent },
  { path: 'feedback/:eventid/:topicid', component: FeedbackComponent },
  { path: 'admin/events', component: AdminComponent, canActivate: [UserService] },
  { path: 'admin/report', component: FeedbackListComponent, canActivate: [UserService] },
  { path: 'logincomplete', component: AppSvcLogin }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}