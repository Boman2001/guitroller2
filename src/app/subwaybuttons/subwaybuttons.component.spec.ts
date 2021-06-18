import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubwaybuttonsComponent } from './subwaybuttons.component';

describe('SubwaybuttonsComponent', () => {
  let component: SubwaybuttonsComponent;
  let fixture: ComponentFixture<SubwaybuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubwaybuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubwaybuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
