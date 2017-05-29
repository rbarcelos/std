import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribuidoraComponent } from './distribuidora.component';

describe('DistribuidoraComponent', () => {
  let component: DistribuidoraComponent;
  let fixture: ComponentFixture<DistribuidoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribuidoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribuidoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
