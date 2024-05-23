import { Routes } from '@angular/router';
import { ChaptersAdminComponent } from './components/chapters-admin/chapters-admin.component';
import { ListAdminComponent } from './components/list-admin/list-admin.component';
import { StaticsAdminComponent } from './components/statics-admin/statics-admin.component';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';
import { AdminComponent } from './page/admin/admin.component';
import { MenteeComponent } from './page/mentee/mentee.component';
import { MentorComponent } from './page/mentor/mentor.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [authGuard],
    children: [
      {
        path: 'admin',
        canActivate: [adminGuard],
        component: AdminComponent,
        children: [
          {
            path: 'chapters',
            component: ChaptersAdminComponent
          },
          {
            path: 'list',
            component: ListAdminComponent
          },
          {
            path: 'statics',
            component: StaticsAdminComponent
          },
          {
            path: '',
            redirectTo: 'chapters',
            pathMatch: 'full'
          },
          {
            path: '**',
            redirectTo: 'chapters',
            pathMatch: 'full'
          }

        ]
      },
      {
        path: 'mentor',
        component: MentorComponent
      },
      {
        path: 'mentee',
        component: MenteeComponent
      },
      {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
  /*
  {
    path: '**',
    component: EmptyRouteComponent
  }
  */
];
