import { Injectable } from '@angular/core';

import { HttpService } from '../http.service';
import { ApiAccountService } from './api-account.service';

import { Account } from 'src/app/_models/account';

@Injectable({
  providedIn: 'root'
})
export class ApiAlumniService {
  constructor(private http: HttpService, private apiAccount: ApiAccountService) { }

  get(params: object) {
    return this.http.get('alumni-admin/get-students?' + Object.keys(params || {}).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&'));
  }

  getJurisdictionId() {
    return this.http.post('alumni-admin/get-juridiction', {});
  }

  convertToAlumni(account: Account) {
    return this.http.post('alumni/convert-to-alumni', account);
  }

  convertManyToAlumni(accounts: Array<Account>) {
    return this.http.post('alumni-admin/convert-to-alumni-accounts', accounts);
  }

  revertManyFromAlumni(accounts: Array<Account>) {
    return this.http.post('alumni-admin/revert-alumni-accounts', {
      data: accounts
    });
  }

  saveUsernameAndPassword(account: Account) {
    return this.http.post('convert-to-alumni/save-username-and-password', account);
  }

  allowSelfServeConversionToAlumni(students: Array<string>) {
    return this.http.post('alumni-admin/allow-self-serve-conversion-to-alumni', {
      data: students
    });
  }

  requestAlumniConvertLink(account: Account) {
    return this.http.post('alumni/send-convert-to-alumni-link', account);
  }

  requestResendAlumniConvertLink(account: Account) {
    return this.http.post('alumni/request-resend-convert-to-alumni-link', account);
  }

  canConvertToAlumni(email: any) {
    return this.http.get('alumni/can-user-convert-to-alumni/' + this.apiAccount.getEmailFromObjectOrString(email));
  }
}
