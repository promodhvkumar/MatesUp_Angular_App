import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, CardHeaderComponent, CardFooterComponent, ButtonDirective, WidgetStatBComponent, ProgressBarDirective, ProgressComponent, } from '@coreui/angular';
import { AppService } from '../../../app.services'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent, IconDirective, ButtonDirective, NgStyle, WidgetStatBComponent, ProgressBarDirective, ProgressComponent]
})
export class LandingComponent {

  constructor(private appService: AppService)
  {

  }

  userLoggedIn = this.appService.hasUserLoggedIn();
  user = this.appService.getUserContext();

  reset() {
    this.userLoggedIn = this.appService.hasUserLoggedIn();
    this.user = this.appService.getUserContext();
  }

  icons = this.appService.getAppConstants().IconsService;

  

  btnLogin() {
    this.appService.navigateTo('/login');
  };

  btnRegister() {
    this.appService.navigateTo('/register');
  };

  btnGotoArena() {
    this.appService.navigateTo('/home/arena');
  }

  btnTerms() {
    this.appService.navigateTo('/extras/terms');
  }

  btnPrivacy() {
    this.appService.navigateTo('/extras/privacy');
  }

  btnLogout() {
    this.appService.logout();
    //this.appService.navigateTo('/home/landing');
    this.reset();
  }
}
