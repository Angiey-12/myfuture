import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiUtilityService {
  constructor(private http: HttpService) { }

  cleanup() {
    return this.http.http.put('sitefinity/cleanup', {});
  }

  reindex(tag?: string) {
    return this.http.http.put('sitefinity/reindex/' + (tag || 'global'), {});
  }

  cleanAll() {
    return this.http.all([this.cleanup(), this.reindex()]);
  }
}
