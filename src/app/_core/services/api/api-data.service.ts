import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private cache = new Map<string, any>();

  constructor(private http: HttpService) { }

  getCountries() {
    const cached = this.cache.get('countries');

    if (cached) {
      return of(cached);
    }

    return this.http.http.get('/assets/countries.json').pipe(
      flatMap((countries: Array<object>) => {
        this.cache.set('countries', countries);
        return countries;
      })
    );
  }

  getGenders() {
    return [
      { id: 'M', text: 'Male' },
      { id: 'F', text: 'Female' },
      { id: 'O', text: 'Other' },
      { id: 'NA', text: 'Prefer not to say' }
    ];
  }

  getIDPs() {
    const cached = this.cache.get('idps');

    if (cached) {
      return of(cached);
    }

    return this.http.get('common/get-idp-list').pipe(
      flatMap((idps: Array<object>) => {
        this.cache.set('idps', idps);
        return idps;
      })
    );
  }

  getIDPsByDomain() {
    const cached = this.cache.get('idps_by_domain');

    if (cached) {
      return of(cached);
    }

    return this.http.get('common/get-idp-info-by-email').pipe(
      flatMap((idps: Array<object>) => {
        this.cache.set('idps_by_domain', idps);
        return idps;
      })
    );
  }
}
