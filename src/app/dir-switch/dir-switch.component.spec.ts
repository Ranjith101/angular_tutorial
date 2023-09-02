import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirSwitchComponent } from './dir-switch.component';

describe('DirSwitchComponent', () => {
  let component: DirSwitchComponent;
  let fixture: ComponentFixture<DirSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirSwitchComponent]
    });
    fixture = TestBed.createComponent(DirSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
