import { Injectable } from '@angular/core';

import { HttpService } from '../http.service';

import { Account } from 'src/app/_models/account';

@Injectable({
  providedIn: 'root'
})
export class ApiAccountService {
  constructor(private http: HttpService) { }

  static PROFILE_PREFERENCES = {
    REMIND_ME_ABOUT_MY_ACCOUNT_DETAILS: 3,
    CONVERT_TO_ALUMNI_LATER: 8
  };

  getEmailFromObjectOrString(email: any) {
    return 'email' in email ? email.email : email;
  }

  transformUserLocationForApi(account: Account) {
    if (account.isOverseas) {
      account.postcode = '0000';
    } else {
      account.country = 'Australia';
    }

    return account;
  }

  getId() {
    return this.http.get('account-details/get-userid');
  }

  getProfile() {
    return this.http.get('user-profile');
  }

  getProfilePreference(preference: number) {
    return this.http.get('user-profile/' + preference);
  }

  getDetails() {
    return this.http.get('account-details');
  }

  getCareerStage() {
    return this.http.get('career-stage');
  }

  saveProfile(details: object) {
    return this.http.post('user-profile', details);
  }

  saveDetails(account: Account) {
    return this.http.post('account-details', this.transformUserLocationForApi(account));
  }

  saveLoginPreference(username: string) {
    return this.http.post('common/save-user-pref-login-via-myfuture', {
      data: username
    });
  }

  saveProfilePreference(preference: number, code: string) {
    return this.http.post('user-profile', {
      profileType: preference,
      ProfileContent: code
    });
  }

  removeProfilePreference(preference: number, code: string) {
    return this.http.delete('user-profile/' + preference + '/' + code);
  }

  requestResendPasswordReset(token: string) {
    return this.http.post('reset-password/request-reset-password', {
      data: token
    });
  }

  registerUser(account: Account, ip?: string) {
    return this.http.post('user/register' + (ip ? '/' + ip : ''), account);
  }

  registerUserWithSSO(account: Account) {
    return this.http.post('user/register-sso', account);
  }

  requestPasswordReset(account: Account) {
    return this.http.post('reset-password/reset-password', account);
  }

  savePasswordAfterReset(token: string, newPassword: string) {
    return this.http.post('reset-password/save-password', {
      data: token,
      password: newPassword
    });
  }

  validateIfSSOUser(email: any) {
    return this.http.post('common/get-sso-user', {
      data: this.getEmailFromObjectOrString(email)
    });
  }

  validateIfEmailIsSSOCompatible(email: string) {
    return this.http.post('common/is-sso-compatible', {
      data: email
    });
  }

  validateIfManagedByIdp(email: any) {
    return this.http.post('common/is-user-managed-by-idp', {
      data: this.getEmailFromObjectOrString(email)
    });
  }

  validateEmail(email: string) {
    return this.http.post('common/is-user-already-registered', {
      data: email
    });
  }

  validateUsername(username: string) {
    return this.http.get('common/is-username-already-exists/' + encodeURIComponent(username));
  }
}
