import { Component } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { AppService } from '../../../app.services';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    imports: [ContainerComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective]
})
export class RegisterComponent {

  constructor(private appService: AppService) {
  }

  hasExternalLogins: boolean = this.appService.hasExternalLogins();
  hasGoogle: boolean = this.appService.hasGoogleLogin();
  hasMicrosoft: boolean = this.appService.hasMicrosoftLogin();
  hasFacebook: boolean = this.appService.hasFacebookLogin();
  hasTwitter: boolean = this.appService.hasTwitterLogin();

  icons = this.appService.getAppConstants().IconsService;

  btnLogin() {
    this.appService.navigateTo('/login');
  };

  btnRegister() {
    this.appService.navigateTo('/home/arena');
  }

}
