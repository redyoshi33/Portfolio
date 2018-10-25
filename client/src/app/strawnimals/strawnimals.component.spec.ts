import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawnimalsComponent } from './strawnimals.component';

describe('StrawnimalsComponent', () => {
  let component: StrawnimalsComponent;
  let fixture: ComponentFixture<StrawnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrawnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrawnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
