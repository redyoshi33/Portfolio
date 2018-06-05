import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfourgameComponent } from './twentyfourgame.component';

describe('TwentyfourgameComponent', () => {
  let component: TwentyfourgameComponent;
  let fixture: ComponentFixture<TwentyfourgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentyfourgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyfourgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
