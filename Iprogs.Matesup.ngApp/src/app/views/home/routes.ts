import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Home`
    },
    children: [
      //{
      //  path: 'landing',
      //  loadComponent: () => import('./landing/landing.component').then(m => m.LandingComponent),
      //  data: {
      //    title: 'Landing'
      //  }
      //},
      {
        path: 'arena',
        loadComponent: () => import('./arena/arena.component').then(m => m.ArenaComponent),
        data: {
          title: 'Arena'
        }
      }
    ]
  }
];
