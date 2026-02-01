import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: $localize`Chats`
    },
    children: [
      {
        path: 'mychats',
        loadComponent: () => import('./mychats/mychats.component').then(m => m.MychatsComponent),
        data: {
          title: 'My Chats'
        }
      },
      {
        path: 'groupchats',
        loadComponent: () => import('./groupchats/groupchats.component').then(m => m.GroupchatsComponent),
        data: {
          title: 'Chat Arenas'
        }
      },
      {
        path: 'search',
        loadComponent: () => import('./search/search.component').then(m => m.SearchComponent),
        data: {
          title: 'Search'
        }
      }
    ]
  }
];
