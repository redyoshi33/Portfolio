import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeehComponent } from './weeh.component';

describe('WeehComponent', () => {
  let component: WeehComponent;
  let fixture: ComponentFixture<WeehComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeehComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
