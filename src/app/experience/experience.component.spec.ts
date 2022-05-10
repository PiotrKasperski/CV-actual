import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExperienceComponent} from './experience.component';
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'translate'})
class MockPipe implements PipeTransform {
  transform(value: any): any {
    return value
  }
}

@Pipe({name: 'monthDate'})
class MockDatePipe implements PipeTransform {
  transform(value: any): any {
    return value
  }
}

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceComponent, MockPipe, MockDatePipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
