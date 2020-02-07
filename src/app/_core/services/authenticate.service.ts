import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { HttpService } from './http.service';
import { User } from '../_models/user';
import { AuthenticateToken } from '../_models/authenticate-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public constructor(public http: HttpService) { }

  private token;

  login(user: User) {
    this.authorise(user);
  }

  logout(user: User) {
    this.token = null;
  }

  authorise(user: User) {
    if (this.token) {
      return of(this.token);
    } else {
      return this.http.http.post(environment.authenticate.token_endpoint, {
        username: user.username,
        password: user.password,
        grant_type: 'password',
        scope: 'openid offline_access',
        client_id: environment.authenticate.client_id,
        client_secret: environment.authenticate.client_secret
      }).pipe(
        flatMap((token: AuthenticateToken) => {
          this.token = token;
          return this.token;
        })
      );
    }
  }

  refresh(refreshToken?: string) {
    if (this.token.access_token) {
      return of(this.token);
    } else {
      return this.http.http.post(environment.authenticate.token_endpoint, {
        refreshToken: refreshToken ? refreshToken : this.token.refresh_token,
        grant_type: 'refresh_token',
        client_id: environment.authenticate.client_id,
        client_secret: environment.authenticate.client_secret
      }).pipe(
        flatMap((token: AuthenticateToken) => {
          this.token = token;
          return this.token;
        })
      );
    }
  }

  addTokenToHeader(headers: HttpHeaders) {
    headers.set('Authorization', 'Bearer ' + this.token.access_token);
    return headers;
  }

  get isLoggedIn(): boolean {
    return this.token !== null;
  }
}
