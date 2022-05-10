import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RatingComponent} from './rating.component';
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'translate'})
class MockPipe implements PipeTransform {
  transform(value: any): any {
    return value
  }
}
describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingComponent, MockPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    component.rate = component.maxRate = component.stars = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
