import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Extras`
    },
    children: [
      {
        path: 'privacy',
        loadComponent: () => import('./privacy/privacy.component').then(m => m.PrivacyComponent),
        data: {
          title: 'Privacy'
        }
      },
      {
        path: 'terms',
        loadComponent: () => import('./terms/terms.component').then(m => m.TermsComponent),
        data: {
          title: 'Terms & Conditions'
        }
      }
    ]
  }
];
