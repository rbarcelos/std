import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfeCardComponent } from './nfe-card.component';

describe('NfeCardComponent', () => {
  let component: NfeCardComponent;
  let fixture: ComponentFixture<NfeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
