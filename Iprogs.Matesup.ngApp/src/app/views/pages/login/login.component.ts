import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { AppService } from '../../../app.services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective,
    CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective,
    IconDirective, FormControlDirective, ButtonDirective, NgStyle, FormsModule ]
})
export class LoginComponent {

  constructor(private appService: AppService)
  {
    this.appService.setLoginStatus(false, undefined);
  }

  hasExternalLogins: boolean = this.appService.hasExternalLogins();
  hasGoogle: boolean = this.appService.hasGoogleLogin();
  hasMicrosoft: boolean = this.appService.hasMicrosoftLogin();
  hasFacebook: boolean = this.appService.hasFacebookLogin();
  hasTwitter: boolean = this.appService.hasTwitterLogin();

  icons = this.appService.getAppConstants().IconsService;

  userName: string = "";
  password: string = "";

  btnLogin() {

    this.appService.httpService.login({ email: this.userName, password: this.password }, (resp: any) => {
      if(resp === "Success") {
        this.appService.httpService.getUserContext((resp1: any) => {
          if (resp1 === "Success") {
            this.appService.setLoginStatus(true, undefined);
            this.appService.navigateTo('/home/arena');
          } else if (resp1 === "Error") {
            console.log("Error in retrieving User Details");
          }
        });
      } else if (resp === "Error") {
        console.log("Error in Logging you in!");
      }
    });
  };

  btnForgotPassword() {
    this.appService.navigateTo('/home/landing');
  };

  btnRegister() {
    this.appService.navigateTo('/register');
  }

}
