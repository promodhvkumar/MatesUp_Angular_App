import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/landing',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'MatesUp'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/home/routes').then((m) => m.routes)
      },
      {
        path: 'chats',
        loadChildren: () => import('./views/chats/routes').then((m) => m.routes)
      },
      {
        path: 'accounts',
        loadChildren: () => import('./views/accounts/routes').then((m) => m.routes)
      },
      {
        path: 'extras',
        loadChildren: () => import('./views/extras/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: 'home/landing',
    loadComponent: () => import('./views/home/landing/landing.component').then(m => m.LandingComponent),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'cr',
    loadComponent: () => import('./views/cr/cr.component').then(m => m.CrComponent),
    data: {
      title: 'Chat Rooms'
    }
  },
  { path: '**', redirectTo: '404' }
];
