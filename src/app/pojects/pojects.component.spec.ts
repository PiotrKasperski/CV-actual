import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PojectsComponent} from './pojects.component';
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'translate'})
class MockPipe implements PipeTransform {
  transform(value: any): any {
    return value
  }
}
describe('PojectsComponent', () => {
  let component: PojectsComponent;
  let fixture: ComponentFixture<PojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PojectsComponent, MockPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
