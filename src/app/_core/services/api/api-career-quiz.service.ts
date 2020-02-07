import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs/operators';

import { HttpService } from '../http.service';

import { BaseObject } from 'src/app/_models/base-object';

@Injectable({
  providedIn: 'root'
})
export class ApiCareerQuizService {
  constructor(private http: HttpService) { }

  get() {
    return this.http.get('quiz');
  }

  getOne(id: string) {
    return this.get().pipe(
      flatMap((result: Array<object>) => {
        return result.filter((item: BaseObject) => {
          return item.id === id;
        });
      })
    );
  }

  getOneWithResult(id: string, resultId: string) {
    return this.http.get('quiz/' + id + '/quiz-result/' + resultId);
  }

  getResults() {
    return this.http.get('quiz-profile');
  }

  getActivityResult(activityId: string) {
    return this.http.get('quiz-profile/' + activityId);
  }

  saveResult(data: object) {
    return this.http.post('quiz-profile', data);
  }
}
