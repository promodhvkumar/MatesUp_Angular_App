import { inject, Injectable } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SessionContext, UserContext } from './../app.models'
import { ResponseModel } from '../models/api.models';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private router: Router) {

  }

  private sessionContext?: SessionContext;
  private userContext?: UserContext;
  private tokenExpiry?: Date;

  private http = inject(HttpClient);

  private baseHeaders = new HttpHeaders();

  public baseURL: string = 'https://matesupdevapi.azurewebsites.net/';

  checkConnectivity() {
    this.http
      .get(
        this.baseURL + 'api/Home/Connectivity'
        // , {
        // headers: this.baseHeaders.set('Authorization', 'Bearer ' + this.sessionContext?.AccessToken)
        // }
      )
      .subscribe((resp) => {});

    return 'Success';
  }

  getHttp(url: string, payload: any, callback: any) {

    this.CheckAccess();
    console.log(this.sessionContext);
    console.log(this.tokenExpiry?.toISOString());
    console.log(this.userContext);
    console.log('Access Issue');
    //this.RedirectToLogin();
    //return;

    this.http.get(this.baseURL + url, {
        headers: this.baseHeaders.set('Authorization', 'Bearer ' + this.sessionContext?.accessToken)
      }).subscribe({
        next: (resp: ResponseModel) => {
        callback(resp);
      },
      error: (err) => {
        console.log(err);
      }
      });
  }

  postHttp(url: string, payload: any, callback: any) {
    this.http.post(this.baseURL + url, payload, {
        headers: this.baseHeaders.set('Authorization', 'Bearer ' + this.sessionContext?.accessToken)
      }).subscribe((resp: ResponseModel) => {
      callback(resp);
    });
  }

  getAttachment(url: string, payload: any, callback: any) {
    this.http.get(this.baseURL + url, {
        headers: this.baseHeaders.set('Authorization', 'Bearer ' + this.sessionContext?.accessToken)
      }).subscribe((resp: any) => {
      callback(resp);
    });
  };

  login(payload: any, callback: any) {
    this.http
      .post<SessionContext>(
        this.baseURL + 'login?userCookies=false&useSessionCookies=false',
        payload
      )
      .subscribe({
        next: (data) => {
          this.setSessionContext(data);
          callback("Success");
        },
        error: (err) => {
          callback('Error');
        },
      });
  }

  refreshLogin(callback: any) {
    let d = new Date();
    if (this.sessionContext !== undefined && this.tokenExpiry !== undefined && this.tokenExpiry?.valueOf() <= d.valueOf()) {
      this.http.post<SessionContext>(this.baseURL + 'refresh', { RefreshToken: this.sessionContext.refreshToken }).subscribe({
          next: (data) => {
            this.setSessionContext(data);
            callback("Success");
          },
          error: (err) => {
            callback("Error");
          },
        });
    }
  }

  getSessionContext() {

    if(!this.sessionContext) {
      let context = localStorage.getItem('sessionContext');

      if (context) {
        this.sessionContext = JSON.parse(context);
      } else
      {
        this.RedirectToLogin();
      }
    } else {
      let d = new Date();
      console.log(d);
      console.log(this.tokenExpiry);
      if ((!this.tokenExpiry) || (this.tokenExpiry !== undefined && this.tokenExpiry.valueOf() < d.valueOf())) {
        this.refreshLogin((resp: any) => {
          console.log(resp);
          if(resp !== "Success") {
            this.RedirectToLogin();
            return;
          }
        });
      }
    }

    if (!this.sessionContext) {
      this.RedirectToLogin();
      return;
    }

    return this.sessionContext;
  }

  setSessionContext(context: SessionContext | undefined) {
    if (context) {
      localStorage.setItem('sessionContext', JSON.stringify(context));
      let tokenExpiry = new Date();
      tokenExpiry.setSeconds(120);//context.expiresIn);
      this.setTokenExpiry(tokenExpiry);
      console.log(this.tokenExpiry);
    } else if (!context) {
      localStorage.removeItem('sessionContext');
    }

    console.log(context);
    console.log(this.sessionContext);
    this.sessionContext = context;
  }

  getTokenExpiry() {
    let tokenExpiry = localStorage.getItem('tokenExpiry');

    if (tokenExpiry) {
      this.tokenExpiry = new Date(Date.parse(tokenExpiry));

      var d = new Date();
      if (this.tokenExpiry === undefined || this.tokenExpiry.valueOf() < d.valueOf()) {
        this.RedirectToLogin();
      }
    }

    return this.tokenExpiry;
  }

  setTokenExpiry(tokenExpiry: Date | undefined) {
    if (tokenExpiry) {
      localStorage.setItem('tokenExpiry', tokenExpiry.toISOString());
    } else if (!tokenExpiry) {
      localStorage.removeItem('tokenExpiry');
    }

    this.tokenExpiry = tokenExpiry;
  }

  getUserContext(callback: any) {
    let d = new Date();
    if (this.sessionContext !== undefined && this.tokenExpiry !== undefined) {
      this.http.get<ResponseModel>(this.baseURL + 'api/Home/GetUserContext', {
        headers: this.baseHeaders.set('Authorization', 'Bearer ' + this.sessionContext?.accessToken)
      }).subscribe({
        next: (data) => {
          if (data.status === "Success") {
            this.setUserContext(data.Data);
            callback("Success");
          } else {
            callback("Error");
          }
        },
        error: (err) => {
          callback("Error");
        }
      });
    }
  }

  setUserContext(context: UserContext | undefined) {
    if (context) {
      localStorage.setItem('userContext', JSON.stringify(context));
    } else if (context === undefined) {
      localStorage.removeItem('userContext');
    }

    this.userContext = context;
  }

  CheckAccess() {

    if(!this.sessionContext) {
      this.getSessionContext();
    }

    if(!this.tokenExpiry) {
      this.getTokenExpiry();
    }

    let d = new Date();
    console.log(d.toISOString());
    //console.log(this.tokenExpiry?.toISOString());

    if (this.tokenExpiry && this.tokenExpiry.valueOf() <= d.valueOf()) {
      this.refreshLogin((resp: string) => {
        if(resp !== "Success") {
          this.RedirectToLogin();
        }
      })
    } else if (!this.tokenExpiry) {
      this.RedirectToLogin();
    }
  }

  RedirectToLogin() {
    console.log('Login Redirect');
    this.setSessionContext(undefined);
    this.setTokenExpiry(undefined);
    this.setUserContext(undefined);
    this.router.navigate(['/login']);
  }
};
