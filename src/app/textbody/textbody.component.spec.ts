import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbodyComponent } from './textbody.component';

describe('TextbodyComponent', () => {
  let component: TextbodyComponent;
  let fixture: ComponentFixture<TextbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextbodyComponent]
    });
    fixture = TestBed.createComponent(TextbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
