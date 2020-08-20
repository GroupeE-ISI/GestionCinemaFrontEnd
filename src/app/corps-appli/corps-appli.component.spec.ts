import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpsAppliComponent } from './corps-appli.component';

describe('CorpsAppliComponent', () => {
  let component: CorpsAppliComponent;
  let fixture: ComponentFixture<CorpsAppliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpsAppliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpsAppliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
