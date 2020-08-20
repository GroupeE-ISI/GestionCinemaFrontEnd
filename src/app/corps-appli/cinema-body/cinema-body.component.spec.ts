import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaBodyComponent } from './cinema-body.component';

describe('CinemaBodyComponent', () => {
  let component: CinemaBodyComponent;
  let fixture: ComponentFixture<CinemaBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
