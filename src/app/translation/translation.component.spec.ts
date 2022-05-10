import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TranslationComponent} from './translation.component';
import {TranslateService} from "@ngx-translate/core";
import {Pipe, PipeTransform} from "@angular/core";
import {Translations} from "./translations";

class MockTranslateService {
  lang = '';
  setDefaultLang = (lang: string) => {
    this.lang = lang
  };
  use = (lang: string) => {
    this.lang = lang
  }
}

@Pipe({name: 'translate'})
class MockPipe implements PipeTransform {
  transform(value: any): any {
    return value
  }
}

describe('TranslationComponent', () => {
  let component: TranslationComponent;
  let fixture: ComponentFixture<TranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TranslationComponent, MockPipe],
      providers: [
        {provide: TranslateService, useClass: MockTranslateService},
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change language', () => {
    let testValue = 'en';
    if (component.language === testValue) testValue = 'pl';

    component.onChanage(testValue);
    expect(component.language).toBe(testValue)
  })
  it('should change translations', () => {
    let testsView: Translations = Translations.EN;
    if (component.language === testsView) testsView = Translations.PL;
    component.changeLanguage(testsView);
    expect(component.language).toBe(testsView);

  })
});
