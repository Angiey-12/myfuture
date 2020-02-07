import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiIndustryService {
  constructor(private http: HttpService) { }

  getProspects(anzsicCode: string) {
    return this.http.get('industry/prospects/' + anzsicCode);
  }
}
