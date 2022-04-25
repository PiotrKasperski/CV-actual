import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TranslationComponent} from './translation.component';
import {TranslateService} from "@ngx-translate/core";
import {Pipe, PipeTransform} from "@angular/core";

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
  it('should change lang', () => {
    let mockEvent = {target: {value: 'pl'}};
    // @ts-ignore
    component.onChanage(mockEvent);
    expect(component.language).toBe('pl')
  })
});
