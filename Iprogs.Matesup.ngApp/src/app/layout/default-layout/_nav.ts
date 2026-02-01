import { cilBank } from '@coreui/icons';
import { INavData } from '@coreui/angular';

export const navDefaultItems: INavData[] = [
  {
    title: true,
    name: 'Home'
  },
  {
    name: 'Home',
    url: '/home/landing',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'Site',
    url: '/extras',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Terms & Conditions',
        url: '/extras/terms',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Privacy',
        url: '/extras/privacy',
        icon: 'nav-icon-bullet'
      }
    ]
  }
];

export const navUserItems: INavData[] = [
  {
    title: true,
    name: 'Home'
  },
  {
    name: 'Home',
    url: '/home/landing',
    iconComponent: { name: 'cil-home' }
  },
  {
    name: 'Arena',
    url: '/home/arena',
    iconComponent: { name: 'cil-bank', content: cilBank }
  },
  {
    title: true,
    name: 'Chat'
  },
  {
    name: 'My Chats',
    url: '/chats/mychats',
    iconComponent: { name: 'cil-cursor' }
  },
  {
    name: 'Chat Arenas',
    url: '/chats/groupchats',
    iconComponent: { name: 'cil-notes' }
  },
  {
    name: 'Search',
    url: '/chats/search',
    iconComponent: { name: 'cil-magnifying-glass' }
  },
  {
    title: true,
    name: 'Account'
  },
  {
    name: 'My Account',
    url: '/accounts',
    iconComponent: { name: 'cil-lock-locked' },
    children: [
      {
        name: 'Profile',
        url: '/accounts/mylocker',
        iconComponent: { name: 'cil-user' }
      },
      {
        name: 'Settings',
        url: '/accounts/mysettings',
        iconComponent: { name: 'cil-settings' }
      }
    ]
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Site',
    url: '/extras',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Terms & Conditions',
        url: '/extras/terms',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Privacy',
        url: '/extras/privacy',
        icon: 'nav-icon-bullet'
      }
    ]
  }
];
