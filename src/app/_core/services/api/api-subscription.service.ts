import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ApiAccountService } from './api-account.service';

import { Account } from 'src/app/_models/account';

@Injectable({
  providedIn: 'root'
})
export class ApiSubscriptionService {
  constructor(private http: HttpService, private apiAccount: ApiAccountService) { }

  getAccountDetails(userId: string | number) {
    return this.http.post('conditionsofusedetails/get-sso-user', {
      data: userId
    });
  }

  pay(email: any) {
    return this.http.post('payment/pay', {
      data: this.apiAccount.getEmailFromObjectOrString(email)
    });
  }

  validateLocationAgreement(account: Account) {
    return this.http.post('conditionsofusedetails/conditions-of-use', this.apiAccount.transformUserLocationForApi(account));
  }

  validateAccessByIP(ip?: string) {
    return this.http.get('common/user-access-info' + (ip ? '/' + ip : ''));
  }

  validateAccessByEmailDomain(email: string) {
    return this.http.post('common/is-valid-email-domain', {
      data: email
    });
  }

  validateWhitelistedEmail(email: string) {
    return this.http.post('common/validate-email-detail', {
      data: email
    });
  }

  validatePaymentRequired(email: any) {
    return this.http.post('common/is-payment-required', {
      data: this.apiAccount.getEmailFromObjectOrString(email)
    });
  }

  validatePaymentReceived(paymentReference: string) {
    return this.http.post('common/is-subscribed-user', {
      data: paymentReference
    });
  }

  validateUserhasSubscribed(userId: string | number) {
    return this.http.post('common/validate-user-subscription', {
      data: userId
    });
  }
}
