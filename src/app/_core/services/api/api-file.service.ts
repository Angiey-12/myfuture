import { Injectable } from '@angular/core';

import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiFileService {
  constructor(private http: HttpService) { }

  upload(file: any) {
    return this.http.post('importdata', {
      source: 'backend',
      file
    });
  }
}
