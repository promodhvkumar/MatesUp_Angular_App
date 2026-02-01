import { Router, ActivatedRoute, RouterOutlet } from '@angular/router'
import { UserContext, SessionContext, ActiveUserModel } from './app.models'
import { inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppConstants } from './app.constants';
import { UserProfileMaster } from './models/accounts.models';

import { HttpService } from './services/httpService'

@Injectable({ providedIn: 'root' })
export class AppService {

  constructor(private router: Router, private userContextService: UserContextService,
    public httpService: HttpService, private appConstants: AppConstants,
    public usrModalSvc: ModalService) {
    let appLogin = localStorage.getItem('appLoginStatus');

    if (appLogin) {
      this.appLoginStatus = JSON.parse(appLogin);
    }

    let userContext = this.userContextService.getUserContext();

    if (appLogin && userContext && userContext !== undefined) {
      this.setLoginStatus(true, userContext);
    }
  }

  private appLoginStatus: boolean = false;

  private user: UserContext | undefined;
  private session: SessionContext | undefined;

  private externalLoginsActivated: boolean = true;

  private googleLogin: boolean = true;
  private microsoftLogin: boolean = true;
  private facebookLogin: boolean = false;
  private twitterLogin: boolean = true;

  getAppConstants() {
    return this.appConstants;
  }

  getUserId() {
    return this.user?.UserId;
  }
  
  hasUserLoggedIn() {
    return this.appLoginStatus;
  }

  setLoginStatus(val: boolean, user: UserContext | undefined) {
    localStorage.setItem('appLoginStatus', JSON.stringify(val));
    this.appLoginStatus = val;
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  getUserContext() {
    return this.userContextService.getUserContext();
  }

  hasExternalLogins() {
    return this.externalLoginsActivated;
  }

  hasGoogleLogin() {
    return this.googleLogin;
  }

  hasMicrosoftLogin() {
    return this.microsoftLogin;
  }

  hasFacebookLogin() {
    return this.facebookLogin;
  }

  hasTwitterLogin() {
    return this.twitterLogin;
  }

  logout() {
    this.appLoginStatus = false;
    localStorage.removeItem('appLoginStatus');
    this.userContextService.setUserContext(undefined);
    this.userContextService.setTokenExpiry(undefined);
    this.httpService.setSessionContext(undefined);
    this.httpService.setTokenExpiry(undefined);
  }
}

@Injectable({ providedIn: 'root' })
export class UserContextService {
  constructor() {}

  private userContext?: UserContext;
  private tokenExpiry?: Date;

  getUserContext() {
    let context = localStorage.getItem('userContext');

    if (context) {
      this.userContext = JSON.parse(context);
    }

    return this.userContext;
  }

  setUserContext(context: UserContext | undefined) {
    if (context) {
      localStorage.setItem('userContext', JSON.stringify(context));
    } else if (context === undefined) {
      localStorage.removeItem('userContext');
    }

    this.userContext = context;
  }

  getTokenExpiry() {
    let tokenExpiry = localStorage.getItem('tokenExpiry');

    if (tokenExpiry) {
      this.tokenExpiry = JSON.parse(tokenExpiry);
    }

    return this.tokenExpiry;
  }

  setTokenExpiry(tokenExpiry: Date | undefined) {
    if (tokenExpiry) {
      localStorage.setItem('tokenExpiry', JSON.stringify(tokenExpiry));
    } else if(tokenExpiry === undefined) {
      localStorage.removeItem('tokenExpiry');
    }

    this.tokenExpiry = tokenExpiry;
  }
}

@Injectable({ providedIn: 'root' })
export class ModalService {

  public selectedUser: ActiveUserModel = {
      age: 0,
      available: "online",
      avatarUrl: "",
      city: "chennai",
      country: "india",
      gender: "Male",
      id: 0,
      name: "",
      selected: true,
      state: "Tamil Nadu",
      UserMaster: {
        Age: 0,
        City: 1,
        Country: 1,
        Description: "",
        DOB: undefined,
        FirstName: "",
        Gender: 1,
        LastName: "",
        NickName: "",
        RelationshipStatus: 1,
        State: 1,
        UserId: 0
      },
      verified: true
    };;

  public userModalVisible = false;

  getselectedUser() {
    return this.selectedUser;
  };

  userModalToggle(selectedUser: ActiveUserModel) {
    this.selectedUser = selectedUser;
    this.userModalVisible = !this.userModalVisible;
  };

  setSelectedUser(user: ActiveUserModel) {
    this.selectedUser = user;
  }

  closeUserModal(){
    this.userModalVisible = false;
  }

}
