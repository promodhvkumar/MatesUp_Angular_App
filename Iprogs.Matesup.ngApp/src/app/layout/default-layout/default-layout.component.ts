import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgScrollbar } from 'ngx-scrollbar';

import { AppService } from '../../app.services';
import { UsermodalComponent } from './../../components/usermodal/usermodal.component'

import {
  ContainerComponent,
  ShadowOnScrollDirective,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective,
  ButtonCloseDirective,
  ButtonDirective,
  AvatarComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardFooterComponent,
  ColComponent,
  RowComponent
} from '@coreui/angular';

import { DefaultFooterComponent, DefaultHeaderComponent } from './';
import { navDefaultItems, navUserItems } from './_nav';

function isOverflown(element: HTMLElement) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    SidebarComponent,
    ColComponent,
    RowComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    ContainerComponent,
    DefaultFooterComponent,
    DefaultHeaderComponent,
    NgScrollbar,
    RouterOutlet,
    RouterLink,
    ShadowOnScrollDirective,
    ButtonCloseDirective,
    ButtonDirective,
    AvatarComponent,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    UsermodalComponent
  ]
})
export class DefaultLayoutComponent {

  constructor(public appSvc: AppService) {
      
  }

  public navItems = this.appSvc.hasUserLoggedIn() ? [...navUserItems] : [...navDefaultItems];
}
