import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Accounts`
    },
    children: [
      {
        path: 'mylocker',
        loadComponent: () => import('./mylocker/mylocker.component').then(m => m.MylockerComponent),
        data: {
          title: 'My Locker'
        }
      },
      {
        path: 'mysettings',
        loadComponent: () => import('./mysettings/mysettings.component').then(m => m.MysettingsComponent),
        data: {
          title: 'My Settings'
        }
      }
    ]
  }
];
