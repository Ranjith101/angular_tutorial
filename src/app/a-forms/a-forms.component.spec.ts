import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormsComponent } from './a-forms.component';

describe('AFormsComponent', () => {
  let component: AFormsComponent;
  let fixture: ComponentFixture<AFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AFormsComponent]
    });
    fixture = TestBed.createComponent(AFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
