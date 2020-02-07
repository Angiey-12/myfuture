import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ApiAccountService } from './api-account.service';

@Injectable({
  providedIn: 'root'
})
export class ApiFavouriteService {
  constructor(private http: HttpService, private apiAccount: ApiAccountService) { }

  static TYPES = {
    OCCUPATION: 1,
    COURSE: 2
  };

  get(type: number) {
    return this.apiAccount.getProfilePreference(type);
  }

  save(type: number, code: string) {
    return this.apiAccount.saveProfilePreference(type, code);
  }

  remove(type: number, code: string) {
    return this.apiAccount.removeProfilePreference(type, code);
  }

  isFavourite(type: number, code: string) {
    return this.http.get('user-profile/is-favourite/' + type + '/' + code);
  }
}
