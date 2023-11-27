import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideritemComponent } from './slideritem.component';

describe('SlideritemComponent', () => {
  let component: SlideritemComponent;
  let fixture: ComponentFixture<SlideritemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideritemComponent]
    });
    fixture = TestBed.createComponent(SlideritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
