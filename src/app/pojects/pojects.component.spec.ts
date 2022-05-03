import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PojectsComponent} from './pojects.component';

describe('PojectsComponent', () => {
  let component: PojectsComponent;
  let fixture: ComponentFixture<PojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PojectsComponent]
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
