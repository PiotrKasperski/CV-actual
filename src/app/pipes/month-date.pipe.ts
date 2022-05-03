import {ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {TranslateService} from "@ngx-translate/core";
import {map, Observable} from "rxjs";

@Pipe({
  name: 'monthDate'
})
export class MonthDatePipe implements PipeTransform, OnDestroy {
  private asyncPipe: AsyncPipe;

  constructor(public translate: TranslateService, private injector: Injector) {
    this.asyncPipe = new AsyncPipe(injector.get(ChangeDetectorRef));
  }

  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
  }

  transform(date: Date): Observable<string> {
    return this.translate.get('month.' + date.getMonth()).pipe(map((month) => {
      return month + ' ' + date.getFullYear();
    }))
  }

}
